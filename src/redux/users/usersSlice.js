import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = (input) => `https://randomuser.me/api/?results=${input}`;

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (input, thunkAPI) => {
	try {
		return axios.get(URL(input)).then((res) => res.data);
	} catch (error) {
		thunkAPI.rejectWithValue('error has occured');
	}
});

const initialState = {
	isLoading: true,
	users: [],
	error: undefined,
};

export const usersSlice = createSlice({
	name: 'users',
	initialState,
    reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsers.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.isLoading = false;
                state.users = action.payload.results;
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export default usersSlice.reducer;