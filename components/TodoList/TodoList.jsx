import Task from '../Task/Task';
import { Container } from './todoList.styles';

const TodoList = ({ todos, handleRemove }) => {
	return (
		<Container>
			{todos.map((todo, idx) => (
				<Task handleRemove={handleRemove} todo={todo} key={idx} />
			))}
		</Container>
	);
};

export default TodoList;
