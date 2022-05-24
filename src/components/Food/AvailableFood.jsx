import DUMMY_FOOD from './DummyFoodList';
import classes from './AvailableFood.module.css'
import Card from '../UI/Card';
import FoodItem from './FoodItem/FoodItem';

const AvailableFood = () => {
  return (
    <section className={classes.food}>
      <Card>
        <ul>
          {DUMMY_FOOD.map(item => {
            return <li><FoodItem props={item.name}/></li>})
            }
        </ul>
      </Card>
    </section>
  );
}

export default AvailableFood;