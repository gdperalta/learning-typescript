import React from 'react';
import './InputField.css';

interface Props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleAddTodo: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAddTodo }: Props) => {
	return (
		<form className='input' onSubmit={handleAddTodo}>
			<input
				type='input'
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
				placeholder='Enter a task'
				className='input__box'
			/>
			<button className='input__submit'>Go</button>
		</form>
	);
};

export default InputField;
