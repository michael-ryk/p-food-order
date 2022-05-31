import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import ItemsContext from '../store/ItemsContext'; //to show added to cart items

const Cart = (props) => {
  const cartContext = useContext(ItemsContext);
  const totalPrice = cartContext.orderPrice.toFixed(2);
  const cartNotEmpty = cartContext.items.length > 0;

  // Debug log
  // console.log("=== Cart.jsx ===")
  // console.log('// cartContext')
  // console.log(cartContext);

  return (
    <Modal onBackdropClick={props.onCloseClick}>
      <h1>My order</h1>
      <ul className={classes['cart-items']}>
        {cartContext.items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total: </span>
        <span>$ {totalPrice}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onCloseClick}>
          Close
        </button>
        {cartNotEmpty && <button>Submit</button>}
      </div>
    </Modal>
  );
};

export default Cart;
