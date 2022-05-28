import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItems = [{ id: 'b1', name: 'punch', amount: 2, price: 13.0 }];

  return (
    <Modal>
      <h1>My order</h1>
      <ul className={classes['cart-items']}>
        {cartItems.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
      <div className={classes.total}>
        <span>Total: </span>
        <span>45.00</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onCloseClick}>Close</button>
        <button>Submit</button>
      </div>
    </Modal>
  );
};

export default Cart;
