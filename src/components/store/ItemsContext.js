import React from 'react';

const ItemsContext = React.createContext({
  items: [],
  orderedQuantity: 0,
  addToOrder: (item) => {},
  removeFromOrder: (id) => {}
});

export default ItemsContext;