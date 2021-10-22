import { useState } from 'react';
import axios from 'axios';
import { Container, Checkbox, TodoText, RemoveButton } from './task.styles';

const TodoItem = ({ todo, handleRemove }) => {
	const { completed, title, id } = todo;
	const [isChecked, setIsChecked] = useState(completed);

	function handleChange(e) {
		setIsChecked(e.target.checked);
		editTodo(id);
	}

	async function deleteTodo(id) {
		try {
			await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
		} catch (err) {
			console.log('delete error', err);
		}
	}

	async function editTodo(id) {
		try {
			const res = await axios.patch(
				`https://jsonplaceholder.typicode.com/todos/${id}`,
				{
					completed: isChecked,
				},
				{
					headers: {
						'Content-type': 'application/json; charset=UTF-8',
					},
				}
			);
		} catch (err) {
			console.log('edit error', err);
		}
	}

	function handleClick(id) {
		handleRemove(id);
		deleteTodo(id);
	}

	return (
		<Container>
			<Checkbox
				name='done'
				type='checkbox'
				checked={isChecked}
				onChange={handleChange}
			/>

			<TodoText done={completed}>{title}</TodoText>
			<RemoveButton onClick={() => handleClick(id)}>X</RemoveButton>
		</Container>
	);
};

export default TodoItem;
