// import React from "react";
import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';

const App: React.FC = () => {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState<Todo[]>([]);

	const handleAddTodo = (e: React.FormEvent) => {
		e.preventDefault();
		if (todo) {
			setTodos([
				...todos,
				{
					id: Date.now(),
					todo,
					isDone: false,
				},
			]);
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
