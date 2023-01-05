import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formFlag: 'login',
  isLogin: false,
};

export const formFlagSlice = createSlice({
  name: 'users/fetch',
  initialState,
  reducers: {
    formFlagSet: (state, action) => {
      state.formFlag = action.payload;
    },
    setLoginStatus: state => {
      state.isLogin = !state.isLogin;
    },
  },
});
export const { formFlagSet, setLoginStatus } = formFlagSlice.actions;
export default formFlagSlice.reducer;
