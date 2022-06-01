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
      
    // Debug log
    // console.log('totalOrderedItems:');
    // console.log(totalOrderedItems);
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
      totalCartPrice: totalOrderedPrice,
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
