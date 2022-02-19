import React, { useEffect, useRef, useState } from 'react';
import './SingleTodo.css';
import { Todo } from '../model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import { ACTIONS, Actions } from '../reducer/reducer';

type Props = {
	todo: Todo;
	setTodos: React.Dispatch<Actions>;
};

const SingleTodo = ({ todo, setTodos }: Props) => {
	const [edit, setEdit] = useState(false);
	const [editTodo, setEditTodo] = useState(todo.todo);
	const todoInput = useRef<HTMLInputElement>(null);

	useEffect(() => {
		todoInput.current?.focus();
	}, [edit]);

	const handleDone = (id: number) => {
		setTodos({ type: ACTIONS.DONE, payload: id });
	};

	const handleDelete = (id: number) => {
		setTodos({ type: ACTIONS.DELETE, payload: id });
	};

	const handleEdit = (e: React.FormEvent, id: number) => {
		e.preventDefault();
		setTodos({ type: ACTIONS.EDIT, payload: { id, editTodo } });
		setEdit(false);
	};

	return (
		<form className='todos__single' onSubmit={(e) => handleEdit(e, todo.id)}>
			{edit ? (
				<input
					ref={todoInput}
					value={editTodo}
					onChange={(e) => {
						setEditTodo(e.target.value);
					}}
					className='todos__single--text'
				/>
			) : todo.isDone ? (
				<s className='todos__single--text'>{todo.todo}</s>
			) : (
				<span className='todos__single--text'>{todo.todo}</span>
			)}
			<div>
				<span
					className='icon'
					onClick={() => {
						if (!edit && !todo.isDone) {
							setEdit(!edit);
						}
					}}
				>
					<AiFillEdit />
				</span>
				<span
					className='icon'
					onClick={() => {
						handleDelete(todo.id);
					}}
				>
					<AiFillDelete />
				</span>
				<span
					className='icon'
					onClick={() => {
						handleDone(todo.id);
					}}
				>
					<MdDone />
				</span>
			</div>
		</form>
	);
};

export default SingleTodo;
