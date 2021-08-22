import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    profileImage: '',
    nickname: '',
    email: '',
    isLogin: false,
  },
  reducers: {
    login: (state, action) => {
      state.nickname = action.payload.nickname;
      state.email = action.payload.email;
      state.profileImage = action.payload.profileImage;
      state.isLogin = true;
    },
    logout: state => {
      state.profileImage = '';
      state.nickname = '';
      state.email = '';
      state.isLogin = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const checkValidity = state => state.user.isLogin;
export const selectUser = state => state.user;
export default userSlice.reducer;
