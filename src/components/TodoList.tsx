import React from 'react';
import { Todo } from '../model';
import { Actions } from '../reducer/reducer';
import SingleTodo from './SingleTodo';
import './TodoList.css';

interface Props {
	todos: Todo[];
	setTodos: React.Dispatch<Actions>;
}

const TodoList = ({ todos, setTodos }: Props) => {
	return (
		<div className='todos'>
			{todos.map((todo) => {
				return <SingleTodo todo={todo} key={todo.id} setTodos={setTodos} />;
			})}
		</div>
	);
};

export default TodoList;
