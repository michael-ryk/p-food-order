import { useContext, useEffect, useState } from 'react';

import classes from './HeaderCartButton.module.css';
import cart from '../../assets/cart.png';
import ItemsContext from '../store/ItemsContext';

const HeaderCartButton = (props) => {
  const itemsFromContext = useContext(ItemsContext);
  const numberOfCartItems = itemsFromContext.items.reduce(
    (totalAmount, item) => {
      return totalAmount + item.amount;
    },
    0
  );

  // Bounce effect on button when user add new item
  const [animationAttached, setAnimationAttached] = useState(false);
  useEffect(() => {
    if (itemsFromContext.items.length === 0) return;

    setAnimationAttached(true);

    //Remove class after animation finished
    const timer = setTimeout(() => {
      setAnimationAttached(false);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [itemsFromContext.items]);

  return (
    <button
      className={`${classes.button} ${animationAttached && classes.bounce}`}
      onClick={props.onClickSubmit}
    >
      <span className={classes.icon}>
        <img src={cart} alt='cart' />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
