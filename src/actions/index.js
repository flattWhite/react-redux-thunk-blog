//action creator, call
import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

// return inner function (fetchPosts)
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	// await keyword => make sure that we successfully fetched a list o posts
	// and dispatch the action before the next line of code
	await dispatch(fetchPosts());

	// Go through all posts and get unique userId
	/*
	const userIds = _.uniq(_.map(getState().posts, "userId"));
	userIds.forEach(id => dispatch(fetchUser(id)));
	*/

	// Refactor code version
	_.chain(getState().posts)
		.map("userId")
		.uniq()
		.forEach(id => dispatch(fetchUser(id)))
		.value();
};

/*
Since action sent to redux thunk
action can either return a javascript obj or a function!!
For a function, it would be automatically called with the dispatch and getState arguments
so that user has a total control over changing or getting info out of the redux store
---- Anytime making API request or Async, Use Redux Thunk!! ---
*/

// dispatch function shows fetchPost inside redux thunk and get invoked with dispatch
export const fetchPosts = () => async dispatch => {
	//dispatch, getState -> can access and modify data in redux
	const response = await jsonPlaceholder.get("/posts");
	dispatch({ type: "FETCH_POSTS", payload: response.data });
};
/*
export const fetchPosts = () => {
	return async dispatch => {
		//dispatch, getState -> can access and modify data in redux
		const response = await jsonPlaceholder.get("/posts");
		dispatch({ type: "FETCH_POSTS", payload: response.data });
	};
};
*/

export const fetchUser = id => async dispatch => {
	const response = await jsonPlaceholder.get(`/users/${id}`);

	dispatch({ type: "FETCH_USER", payload: response.data });
};

/************************memoize version************************/

/* 
export const fetchUser = id => dispatch => {
 	_fetchUser(id, dispatch);
 };
*/

// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

// // private function
// const _fetchUser = _.memoize(async (id, dispatch) => {
// 	const response = await jsonPlaceholder.get(`/users/${id}`);
// 	dispatch({ type: "FETCH_USER", payload: response.data });
// });

/************************memoize version************************/
