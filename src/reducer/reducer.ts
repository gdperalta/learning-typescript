import { Todo } from '../model';

export enum ACTIONS {
	ADD = 'add',
	DELETE = 'delete',
	DONE = 'done',
	EDIT = 'edit',
}

export type Actions =
	| { type: ACTIONS.ADD; payload: string }
	| { type: ACTIONS.DELETE; payload: number }
	| { type: ACTIONS.DONE; payload: number }
	| { type: ACTIONS.EDIT; payload: { id: number; editTodo: string } };

export const TodoReducer = (state: Todo[], action: Actions) => {
	switch (action.type) {
		case ACTIONS.ADD:
			return [
				...state,
				{
					id: Date.now(),
					todo: action.payload,
					isDone: false,
				},
			];
		case ACTIONS.DELETE:
			return state.filter((todo) => todo.id !== action.payload);
		case ACTIONS.DONE:
			return state.map((todo) =>
				todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
			);
		case ACTIONS.EDIT:
			return state.map((todo) =>
				todo.id === action.payload.id
					? { ...todo, todo: action.payload.editTodo }
					: todo
			);
		default:
			return state;
	}
};
