import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { _get } from '../../utils/api';

const initialState = {
  users: [],
};

export const fetchUsers = createAsyncThunk('users', async () => {
  const response = await _get('users');
  return response.data.data;
});

export const usersSlice = createSlice({
  name: 'users/fetch',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.employees = action.payload;
    });
  },
});

export default usersSlice.reducer;
