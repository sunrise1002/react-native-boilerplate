import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface UserState {
  id: string;
  createdAt: string;
  name: string;
  avatar: string;
}

const initialState: UserState[] = [];

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsers: () => {},
    getUsersSuccess: (state, action: PayloadAction<UserState[]>) => {
      return action.payload;
    },
    addUser: (state, action: PayloadAction<UserState>) => {
      console.log('addUser', state, action);
    },
    addUserSuccess: (state, action: PayloadAction<UserState>) => {
      state.push(action.payload);
    },
    removeUser: (state, action: PayloadAction<UserState>) => {
      console.log('removeUser', state, action);
    },
    removeUserSuccess: (state, action: PayloadAction<UserState>) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getUsers,
  getUsersSuccess,
  addUser,
  addUserSuccess,
  removeUser,
  removeUserSuccess,
} = userSlice.actions;

export default userSlice.reducer;
