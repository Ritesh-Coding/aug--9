import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: { username: string } | null;
  accessToken: string | null;
  refreshToken: string | null;
  role: string | null;
  isAuthenticated: boolean;
  userId: number | null;
  firstName: string | null;
  lastName: string | null;
  navTitle: string | null;
}


const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  role: null,
  isAuthenticated: false,
  userId: null,
  firstName: null,
  lastName: null,
  navTitle: null
};


interface NavbarTitlePayload {
  navTitle: string;
}

interface LoginSuccessPayload {
  user: { username: string };
  accessToken: string;
  refreshToken: string;
  role: string;
  userId: number;
  firstName: string;
  lastName: string;
}


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    navbarTitle: (state, action: PayloadAction<NavbarTitlePayload>) => {
      state.navTitle = action.payload.navTitle;
    },
    loginSuccess: (state, action: PayloadAction<LoginSuccessPayload>) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.role = action.payload.role;
      state.isAuthenticated = true;
      state.userId = action.payload.userId;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.role = null;
      state.isAuthenticated = false;
      state.userId = null;
      state.firstName = null;
      state.lastName = null;
    },
  },
});


export const { loginSuccess, logout, navbarTitle } = authSlice.actions;
export default authSlice.reducer;
