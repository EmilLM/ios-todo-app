import { useState } from 'react';
import styled from 'styled-components';
import { Form, ClearButton, InputText, InputSubmit } from './input.styles';

const Input = ({ addTodos }) => {
	const [inputData, setInputData] = useState('');

	function handleChange(e) {
		setInputData(e.target.value);
	}
	function handleSubmit(e) {
		e.preventDefault();
		addTodos(inputData);
		setInputData('');
	}

	return (
		<Form onSubmit={handleSubmit}>
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
