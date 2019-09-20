//action creator, call
import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async dispatch => {
	//dispatch, getState -> can access and modify data in redux
	const response = await jsonPlaceholder.get("/posts");
	dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// export const fetchUser = id => dispatch => {
// 	_fetchUser(id, dispatch);
// };

export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

// private function
const _fetchUser = _.memoize(async (id, dispatch) => {
	const response = await jsonPlaceholder.get(`/users/${id}`);
	dispatch({ type: "FETCH_USER", payload: response.data });
});

// export const fetchUser = function(id) {
// 	return _.memoize(async function(dispatch) {
// 		const response = await jsonPlaceholder.get(`/users/${id}`);

// 		dispatch({ type: "FETCH_USER", payload: response.data });
// 	});
// };
