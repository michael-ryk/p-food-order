import { useReducer } from 'react';
import ItemsContext from './ItemsContext';

// Reducer default value
const cartDefault = {
  items: [],
  totalCartPrice: 0,
};

// Reducer actions - returns new state of cartState
const cartReducer = (state, action) => {
  if (action.action === 'ADD') {
    // Check if this items already order and add to existing item

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemIndex];
    let updatedItem;
    let updatedListOfItems;

    // Debug log
    // console.log('!!! current items !!!');
    // console.log(state.items);
    // console.log('User input item:');
    // console.log(action.item);

    if (existingItem) {
      updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedListOfItems = [...state.items];
      updatedListOfItems[existingItemIndex] = updatedItem;
    } else {
      updatedItem = {...action.item};
      updatedListOfItems = state.items.concat(updatedItem);
    }

    const totalOrderedItems = updatedListOfItems;
    const totalOrderedPrice =
      state.totalCartPrice + action.item.price * action.item.amount;
      
      return {
        items: totalOrderedItems,
        totalCartPrice: totalOrderedPrice,
      };
    }
    
    if (action.action === 'REMOVE'){
      
      // Debug log
      console.log("=== ItemsProvider - cartReducer func === ");
      console.log('// State')
      console.log(state);
      console.log('// Action')
      console.log(action)
      // console.log('// Calculations of total items and price')
      // console.log(totalOrderedItems)
      // console.log(totalOrderedPrice)

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    console.log(existingItemIndex);

    const existingItem = state.items[existingItemIndex];
    const newAmount = state.totalCartPrice - existingItem.price;

    let updatedListOfItems;

    console.log(state);
    console.log(newAmount);
    
    // Last item left ? Remove completly
    if (existingItem.amount === 1 ){
      // Remove item
      updatedListOfItems = state.items.filter(item => item.id !== action.id)
    } else {
      // Keep item, just decrease amount
      const updatedItem = {...existingItem, amount: existingItem.amount - 1}
      updatedListOfItems = [...state.items];
      updatedListOfItems[existingItemIndex] = updatedItem;
    }

    return {
      items: updatedListOfItems,
      totalCartPrice: newAmount,
    };

  }

  return cartDefault;
};

const ItemsProvider = (props) => {
  // Array of ordered items + total price calculated
  const [cartState, dispatchCart] = useReducer(cartReducer, cartDefault);

  // Debug log
  // console.log('=== ItemsProvider ===')
  // console.log('// cartState')
  // console.log(cartState);

  const addItemToCart = (item) => {
    dispatchCart({ action: 'ADD', item: item });
  };

  const removeItemFromCart = (id) => {
    dispatchCart({ action: 'REMOVE', id: id });
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
