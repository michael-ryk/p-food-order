import { createContext } from 'react';

const ItemsContext = createContext({
  items: [],
  orderedQuantity: 0,
  addToOrder: (item) => {},
  removeFromOrder: (id) => {}
});

export default ItemsContext;