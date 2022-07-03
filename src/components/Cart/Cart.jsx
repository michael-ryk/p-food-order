import { useState, useContext } from 'react';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import ItemsContext from '../store/ItemsContext'; //to show added to cart items
import OrderForm from './OrderForm';

const Cart = (props) => {
  const cartContext = useContext(ItemsContext);
  const totalPrice = cartContext.orderPrice.toFixed(2);
  const cartNotEmpty = cartContext.items.length > 0;
  const [isOrder, setIsOrder] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState();

  // Debug log
  // console.log("=== Cart.jsx ===")
  // console.log('// cartContext')
  // console.log(cartContext);

  const addItem = (item) => {
    cartContext.addToOrder({...item, amount:1});
  };

  const removeItem = (id) => {
    console.log(id)
    cartContext.removeFromOrder(id);
  };

  // Items in cart, confirmation form open to add user data
  const submitHandler = () => {
    setIsOrder(true);
  }

  // Final confirmation of user data and send to order
  const confirmHandler = async (userInfo) => {
    // console.log("Order Confirmed - sent to DB")
    setIsSubmit(true);
    
    try{
      const response = await fetch('https://p-food-order-default-rtdb.firebaseio.com/orders.json', {
        method: 'POST',
        body: JSON.stringify({
          user: userInfo.fname + "-" + userInfo.lname,
          order: cartContext.items,
          address: userInfo.address + "_" + userInfo.city
        })
      })
      const data = await response.json();
      setIsSubmit(false);
      setError(null);
      return data;
    } catch (e){
      setIsSubmit(false);
      console.log(e);
      setError(e);
      return e;
    }
  }
  
  return (
    <Modal onBackdropClick={props.onCloseClick}>
      <h1>My order</h1>
      <ul className={classes['cart-items']}>
        {cartContext.items.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            onAdd={addItem.bind(null, item)}
            onRemove={removeItem.bind(null, item.id)}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total: </span>
        <span>$ {totalPrice}</span>
      </div>
      {isOrder && <OrderForm onCancel={props.onCloseClick} onConfirm={confirmHandler}/>}
      {isSubmit && <p>Order submitting ...</p>}
      {error && <p>Error connect to DB</p>}
      {!isOrder &&
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onCloseClick}>
            Close
          </button>
        {cartNotEmpty && <button onClick={submitHandler}>Submit</button>}
        </div>
      }
    </Modal>
  );
};

export default Cart;
