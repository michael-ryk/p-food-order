import { useContext } from 'react';

import classes from './HeaderCartButton.module.css';
import cart from '../../assets/cart.png';
import ItemsContext from '../store/ItemsContext';

const HeaderCartButton = (props) => {
  const itemsFromContext = useContext(ItemsContext);
  const numberOfCartItems = itemsFromContext.items.length;

  return (
    <button className={classes.button} onClick={props.onClickSubmit}>
      <span className={classes.icon}>
        <img src={cart} alt='cart' />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
