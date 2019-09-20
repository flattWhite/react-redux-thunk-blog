/* first argument of reducer is a state
state = [] => by default is an empty list
whatever we return from reducer last time will be 
a first argument (state) when we call reducer again

For example: 
 - initally, State = [], return [A]
 - 2nd time, State = [A], return [A, B]
 - 3rd time, Sate = [A,B], return [A,B,C]

 Therefore do not modify state itself, instead return a new obj or new array
 If you modify old state itself and return it,
 old state === new state, and will not be re-rendered on the screen

*/
export default (state = [], action) => {
	switch (action.type) {
		case "FETCH_USER":
			return [...state, action.payload];
		default:
			return state;
	}
};
