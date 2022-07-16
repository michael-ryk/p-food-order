import { useDispatch } from 'react-redux';

import FoodItemForm from './FoodItemForm';
import { appActions } from '../../store/index';
import classes from './FoodItem.module.css';

const FoodItem = ({name, description, price}) => {

  const dispatch = useDispatch();

  const addToCartHandle = ItemAmount => {

    dispatch(appActions.addItemToCart({
      name: name,
      amount: ItemAmount,
      price: price,
    }));

  }

  return (
    <li className={classes.food}>
      <div>
        <h3 className={classes.food__name}>{name}</h3>
        <p className={classes.food__description}>{description}</p>
        <p className={classes.food__price}>{price.toFixed(2)}</p>
      </div>
      <div>
        <FoodItemForm onAddToCart={addToCartHandle}/>
      </div>
    </li>
  );
}

export default FoodItem;