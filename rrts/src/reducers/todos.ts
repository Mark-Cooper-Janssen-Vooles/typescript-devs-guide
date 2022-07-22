import { FetchTodosAction, Todo } from '../actions/actions';
import { ActionTypes } from '../actions/types';

export const todosReducer = (
	state: Todo[] = [],  // default state is an empty array
	action: FetchTodosAction
) => {
	switch (action.type) {
		case ActionTypes.fetchTodos:
			return action.payload;
		default:
			return state;
	}
}