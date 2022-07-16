import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    //tbd
  }
});

const store = configureStore({ reducer: appSlice.reducer });

export const appActions = appSlice.actions;
export default store;