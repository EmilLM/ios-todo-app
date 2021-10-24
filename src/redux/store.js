import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './reducers/todosSlice';
import usersReducer from './reducers/usersSlice'

export default configureStore({
	reducer: {
		todos: todosReducer,
		users: usersReducer
	},
});
