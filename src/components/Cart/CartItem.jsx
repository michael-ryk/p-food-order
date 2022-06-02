import classes from './CartItem.module.css';

const CartItem = ({name, amount, price, onAdd, onRemove}) => {

  return (
    <li className={classes['cart-item']}>
      <div>
        <h3>{name}</h3>
        <span className={classes.price}>${price.toFixed(2)}</span>
        <span className={classes.amount}>x{amount}</span>
      </div>
      <div>
        <button onClick={onAdd}>+</button>
        <button onClick={onRemove}>-</button>
      </div>
    </li>
  );

}

export default CartItem;