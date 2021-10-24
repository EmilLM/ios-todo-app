import { useEffect, useState } from 'react';
import { Form, Label, Select, Option } from './selectUser.styles';
import { useDispatch } from 'react-redux';
import { getCurrentUserId } from '../../src/redux/reducers/usersSlice';

const SelectUser = ({ usersId }) => {
	const [selectedUserId, setSelectedUserId] = useState(1);
	function handleChange(e) {
		setSelectedUserId(Number(e.target.value));
	}
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCurrentUserId(selectedUserId));
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
