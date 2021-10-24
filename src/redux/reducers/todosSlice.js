import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	todos: [],
	status: 'idle',
	error: null,
};

export const getTodos = createAsyncThunk('todos/getTodos', async (userId) => {
	const response = await axios.get(
		`https://jsonplaceholder.typicode.com/todos?userId=${userId}`
	);
	return response.data;
});

export const addTodos = createAsyncThunk('todos/addTodos', async (newTodo) => {
	const response = await axios.post(
		`https://jsonplaceholder.typicode.com/todos`,
		newTodo
	);
	return response.data;
});

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		todosLocalAdded(state, action) {
			state.todos = action.payload;
		},
		todoRemoved(state, action) {
			const { title } = action.payload;
			// removing by title instead of title because the api creates new todos with the same id
			const todos = [...state.todos];
			const remaniningTodos = todos.filter((todo) => todo.title !== title);
			state.todos = remaniningTodos;
		},

		todoUpdated(state, action) {
			const { title } = action.payload;
			const updatedTodos = state.todos.map((todo) => {
				if (todo.title === title) {
					todo.completed = !todo.completed;
				}
				return todo;
			});
			state.todos = updatedTodos;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(getTodos.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.todos = action.payload;
			})
			.addCase(addTodos.fulfilled, (state, action) => {
				state.todos.unshift(action.payload);
			});
		// .addCase(getTodos.pending, (state, action) => {
		// 	state.status = 'loading';
		// })

		// .addCase(getTodos.rejected, (state, action) => {
		// 	state.status = 'failed';
		// 	state.error = action.error.message;
		// });
	},
});

export const selectAllTodos = (state) => state.todos.todos;

export const { todosLocalAdded, todoUpdated, todoRemoved } = todosSlice.actions;

export default todosSlice.reducer;
