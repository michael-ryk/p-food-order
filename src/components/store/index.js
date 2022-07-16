import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalCartPrice: 0,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addItemToCart(state, action){
      //TBD
    },
    removeItemFromCart(state, action){
      //TBD
    }
  }
});

const store = configureStore({ reducer: appSlice.reducer });

export const appActions = appSlice.actions;
export default store;