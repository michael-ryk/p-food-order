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
      const newItem = action.payload;
      const itemInCart = state.cartItems.find(item => item.name === newItem.name);
      
      if (itemInCart){
        // console.log("Item in cart - update")
        itemInCart.amount += newItem.amount;
      } else {
        // console.log("Item not in cart - create")
        state.cartItems.push({
          id: new Date().getTime().toString(),
          name: newItem.name,
          amount: newItem.amount,
          price: newItem.price,
        })
      }

      state.totalCartPrice += newItem.price * newItem.amount;
      state.totalQuantity += newItem.amount;
    },
    removeItemFromCart(state, action){
      //TBD
    }
  }
});

const store = configureStore({ reducer: appSlice.reducer });

export const appActions = appSlice.actions;
export default store;