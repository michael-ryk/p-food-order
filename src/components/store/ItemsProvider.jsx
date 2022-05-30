import { useReducer } from 'react';
import ItemsContext from './ItemsContext';

const cartDefault = {
  items: [],
  totalOrderedItems: 0
}

const cartReducer = (state, action) => {
  if (action.action === 'ADD') {
    const currentItems = state.items.concat(action.item);
    const currentTotal = state.totalOrderedItems + action.item.price * action.item.orderedQuantity;
    return {
      items: currentItems,
      totalOrderedItems: currentTotal
    }
  }
  return cartDefault;
}

const ItemsProvider = (props) => {

  const [cartState, dispatchCart] = useReducer(cartReducer, cartDefault);

  const addItemToCart = (item) => {
    dispatchCart({action: 'ADD', item: item});
  };

  const removeItemFromCart = (id) => {
    dispatchCart({action: 'REMOVE', id: id});
  };

  const itemsContext = {
    items: cartState.items,
    orderedQuantity: cartState.totalOrderedItems,
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
