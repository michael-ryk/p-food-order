import {useState, useEffect} from 'react';
import classes from './AvailableFood.module.css'
import Card from '../UI/Card';
import FoodItem from './FoodItem/FoodItem';

const AvailableFood = () => {

  const [foodList, setFoodList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch data from DB once when page loaded
  useEffect(()=>{

    // Trick to use expression and call it to make it work from useEffect
    const fetchFoodList = async () => {
      setIsLoading(true);
      const response = await fetch("https://p-food-order-default-rtdb.firebaseio.com/meals.json");
      const data = await response.json();
      
      // Rearange Food list to acceptable form used in code
      const foodFromDb = [];
      for (const key in data) {
        foodFromDb.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setFoodList(foodFromDb);
      setIsLoading(false);
    }
    fetchFoodList();
  },[]);

  return (
    <section className={classes.food}>
      {isLoading && <p className={classes.isLoading}>Data Loading ...</p>}
      <Card>
        <ul>
          {foodList.map(item => {
            return <FoodItem key={item.id} {...item}/>})
            }
        </ul>
      </Card>
    </section>
  );
}

export default AvailableFood;