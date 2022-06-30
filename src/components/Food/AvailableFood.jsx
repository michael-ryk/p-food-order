import DUMMY_FOOD from './DummyFoodList';
import {useEffect} from 'react';
import classes from './AvailableFood.module.css'
import Card from '../UI/Card';
import FoodItem from './FoodItem/FoodItem';

const AvailableFood = () => {

  // Fetch data from DB once when page loaded
  // useEffect(()=>{

  // },[]);

  async function fetchFoodList () {
    console.log('Start Async Function to fetch data')
    const response = await fetch("https://p-food-order-default-rtdb.firebaseio.com/meals.json");
    const data = await response.json();
    
    console.log(data);
  }



  return (
    <section className={classes.food}>
      <button onClick={fetchFoodList}>Fetch List</button>
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