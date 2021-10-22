import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Form, Label, Select, Option } from './selectUser.styles';

const SelectUser = ({ usersId, getUserTodos }) => {
	const [selectedUserId, setSelectedUserId] = useState(1);

	function handleChange(e) {
		setSelectedUserId(Number(e.target.value));
	}

	useEffect(() => {
		getUserTodos(selectedUserId);
	}, [selectedUserId]);

	return (
		<Form>
			<Label htmlFor='users'>
				User
				<Select
					name='users'
					id='users'
					value={selectedUserId}
					onChange={handleChange}
				>
					{usersId.map((id) => (
						<Option value={id} key={id}>
							{id}
						</Option>
					))}
				</Select>
				tasks:
			</Label>
		</Form>
	);
};

export default SelectUser;
