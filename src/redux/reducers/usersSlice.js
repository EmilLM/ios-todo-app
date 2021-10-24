import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	userId: 1,
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		getCurrentUserId(state, action) {
			state.userId = action.payload;
		},
	},
});

export const { getCurrentUserId } = usersSlice.actions;

export default usersSlice.reducer;
