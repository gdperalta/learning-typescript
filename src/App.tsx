import React, { useReducer, useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';

import { ACTIONS, TodoReducer } from './reducer/reducer';

const App: React.FC = () => {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useReducer(TodoReducer, []);

	const handleAddTodo = (e: React.FormEvent) => {
		e.preventDefault();
		if (todo) {
			setTodos({ type: ACTIONS.ADD, payload: todo });
			setTodo('');
		}
	};

	console.log(todos);

	return (
		<div className='App'>
			<span className='heading'>Tasks</span>
			<InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	);
};

export default App;
