import { createContext } from 'react';

const ItemsContext = createContext({
  items: [],
  orderPrice: 0,
  addToOrder: (item) => {},
  removeFromOrder: (id) => {}
});

export default ItemsContext;