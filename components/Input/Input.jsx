import { useState } from 'react';
import { Form, ClearButton, InputText, InputSubmit } from './input.styles';
import { useDispatch, useSelector } from 'react-redux';
import { addTodos } from '../../src/redux/reducers/todosSlice';

const Input = () => {
	const [inputData, setInputData] = useState('');

	const userId = useSelector((state) => state.users.userId);

	function handleChange(e) {
		setInputData(e.target.value);
	}
	const dispatch = useDispatch();

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(addTodos({ title: inputData, completed: false, userId: userId }));
		setInputData('');
	}

	return (
		<Form onSubmit={handleSubmit}>
			{/* added clear state button just for ui symmetry */}
			<ClearButton
				onClick={(e) => {
					e.preventDefault();
					setInputData('');
				}}
			>
				X
			</ClearButton>
			<InputText
				type='text'
				name='text'
				value={inputData}
				onChange={handleChange}
			/>
			<InputSubmit type='submit' value='ADD' disabled={!inputData} />
		</Form>
	);
};

export default Input;
