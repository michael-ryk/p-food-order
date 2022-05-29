import ItemsContext from './ItemsContext';

const ItemsProvider = props => {

  const addItemToCart = item => {

  };

  const removeItemFromCart = id => {

  };

  const itemsContext = {
    items: [],
    orderedQuantity: 0,
    addToOrder: addItemToCart,
    removeFromOrder: removeItemFromCart
  }

  return (
    <ItemsContext.Provider value={itemsContext}>
      {props.children}
    </ItemsContext.Provider>
  );

}

export default ItemsProvider