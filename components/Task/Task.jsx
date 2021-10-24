import { Container, TodoText, RemoveButton, DoneButton } from './task.styles';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import useTaskActions from '../../src/hooks/useTaskActions';

const TodoItem = ({ todo }) => {
	const { completed, title } = todo;
	const { removeTask, finishTask } = useTaskActions();

	// removing by title instead of id because the api creates new todos with the same id (201)
	// and removes all new todos at once, titles of new todos that arent the same are removed invidually  (functionality limited by the api, using it to create new todos and appending those)

	return (
		<Container>
			<DoneButton onClick={() => finishTask(title)}>
				{completed ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
			</DoneButton>
			<TodoText done={completed}>{title}</TodoText>
			<RemoveButton onClick={() => removeTask(title)}>X</RemoveButton>
		</Container>
	);
};

export default TodoItem;
