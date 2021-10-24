import { todoRemoved, todoUpdated } from '../redux/reducers/todosSlice';
import { useDispatch } from 'react-redux';

const useTaskActions = () => {
	const dispatch = useDispatch();

	function removeTask(title) {
		dispatch(todoRemoved({ title }));
	}
	function finishTask(title) {
		dispatch(todoUpdated({ title }));
	}
	return { removeTask, finishTask };
};

export default useTaskActions;
