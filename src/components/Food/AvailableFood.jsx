import DUMMY_FOOD from './DummyFoodList';
import {useEffect} from 'react';
import classes from './AvailableFood.module.css'
import Card from '../UI/Card';
import FoodItem from './FoodItem/FoodItem';

const AvailableFood = () => {

  // Fetch data from DB once when page loaded
  useEffect(()=>{
    // Trick to use expression and call it to make it work from useEffect
    const fetchFoodList = async () => {
      console.log(':: Fetch Data from DB ::')
      const response = await fetch("https://p-food-order-default-rtdb.firebaseio.com/meals.json");
      const data = await response.json();
      console.log(data); 
    }
    fetchFoodList();
  },[]);

  return (
    <section className={classes.food}>
      <Card>
        <ul>
          {DUMMY_FOOD.map(item => {
            return <FoodItem key={item.id} {...item}/>})
            }
        </ul>
      </Card>
    </section>
  );
}

export default AvailableFood;