import classes from './HeaderCartButton.module.css';
import cart from '../../assets/cart.png';

const HeaderCartButton = props => {

  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <img src={cart} alt='cart'/>
      </span>
      <span>Cart</span>
      <span className={classes.badge}>5</span>
    </button>
  )

}

export default HeaderCartButton;