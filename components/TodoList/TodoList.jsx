import Task from '../Task/Task';
import { Container } from './todoList.styles';
import { useSelector, useDispatch } from 'react-redux';
import {
	selectAllTodos,
	getTodos,
	todosLocalAdded,
} from '../../src/redux/reducers/todosSlice';

import { useEffect } from 'react';

const TodoList = () => {
	const todos = useSelector(selectAllTodos);
	const userId = useSelector((state) => state.users.userId);

	const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage.getItem(userId) === null) {
			dispatch(getTodos(userId));
		} else {
			const localTodos = JSON.parse(localStorage.getItem(userId));
			dispatch(todosLocalAdded(localTodos));
		}
	}, [dispatch, userId]);

	useEffect(() => {
		localStorage.setItem(userId, JSON.stringify(todos));
	}, [todos, userId]);

	return (
		<Container>
			{todos.map((todo, idx) => (
				<Task todo={todo} key={idx} />
			))}
		</Container>
	);
};

export default TodoList;
