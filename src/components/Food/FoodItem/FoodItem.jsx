import {useContext} from 'react'
import classes from './FoodItem.module.css';
import FoodItemForm from './FoodItemForm';
import itemsContext from '../../store/ItemsContext';

const FoodItem = ({id, name, description, price}) => {

  const context = useContext(itemsContext);

  // ItemAmount filled by user while other from items list
  const addToCartHandle = ItemAmount => {
    context.addToOrder({
      id: id,
      name: name,
      amount: ItemAmount,
      price: price
    })
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