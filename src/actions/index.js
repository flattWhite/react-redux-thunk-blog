//action creator, call
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => {
	return async function(dispatch, getState) {
		//dispatch, getState -> can access and modify data in redux
		const response = await jsonPlaceholder.get("/posts");
		dispatch({ type: "FETCH_POSTS", payload: response });
	};
};
