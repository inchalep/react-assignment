import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allUsers: [],
};

export const registerUserSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.allUsers.push(action.payload);
    },
  },
});
export const { registerUser } = registerUserSlice.actions;
export default registerUserSlice.reducer;
