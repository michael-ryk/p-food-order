import { useReducer } from 'react';
import ItemsContext from './ItemsContext';

// Reducer default value
const cartDefault = {
  items: [],
  totalCartPrice: 0
}

// Reducer actions - returns new state of cartState
const cartReducer = (state, action) => {
  if (action.action === 'ADD') {
    const totalOrderedItems = state.items.concat(action.item);
    const totalOrderedPrice = state.totalCartPrice + action.item.price * action.item.amount;
    
    // Debug log
    // console.log("=== ItemsProvider - cartReducer func === ");
    // console.log('// State')
    // console.log(state);
    // console.log('// Action')
    // console.log(action)
    // console.log('// Calculations of total items and price')
    // console.log(totalOrderedItems)
    // console.log(totalOrderedPrice)
    
    return {
      items: totalOrderedItems,
      totalCartPrice: totalOrderedPrice
    }
  }
  return cartDefault;
}

const ItemsProvider = (props) => {

  // Array of ordered items + total price calculated
  const [cartState, dispatchCart] = useReducer(cartReducer, cartDefault);

  // Debug log
  // console.log('=== ItemsProvider ===')
  // console.log('// cartState')
  // console.log(cartState);

  const addItemToCart = (item) => {
    dispatchCart({action: 'ADD', item: item});
  };

  const removeItemFromCart = (id) => {
    dispatchCart({action: 'REMOVE', id: id});
  };

  const itemsContext = {
    items: cartState.items,
    orderPrice: cartState.totalCartPrice,
    addToOrder: addItemToCart,
    removeFromOrder: removeItemFromCart,
  };

  return (
    <ItemsContext.Provider value={itemsContext}>
      {props.children}
    </ItemsContext.Provider>
  );
};

export default ItemsProvider;
