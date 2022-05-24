import classes from './FoodItem.module.css';

const FoodItem = ({name, description, price}) => {

  return (
    <li>
      <div className={classes.food}>
        <h3 className={classes.food__name}>{name}</h3>
        <p className={classes.food__description}>{description}</p>
        <p className={classes.food__price}>{price}</p>
      </div>
    </li>
  );
}

export default FoodItem;