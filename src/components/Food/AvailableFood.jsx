import DUMMY_FOOD from './DummyFoodList';
import classes from './AvailableFood.module.css'

const AvailableFood = () => {
  return (
    <section className={classes.food}>
      <ul>
        {DUMMY_FOOD.map(item => <li>{item.name}</li>)}
      </ul>
    </section>
  );
}

export default AvailableFood;