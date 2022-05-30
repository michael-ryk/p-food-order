import { useRef, useState} from 'react';
import classes from './FoodItemForm.module.css';
import Input from '../../UI/Input';

const FoodItemForm = (props) => {
  const [amountValid, setAmountValid] = useState(true);
  const amountInput = useRef();

  const submitHandle = (e) => {
    e.preventDefault();
    const enteredQuantity = +amountInput.current.value;

    //Validation - i have input validation already
    if (enteredQuantity === 0 || enteredQuantity < 1 || enteredQuantity > 5) {
      setAmountValid(false);
      return;
    }

    props.onAddToCart(enteredQuantity);
  }; 

  return (
    <form className={classes.form} onSubmit={submitHandle}>
      <Input
        ref={amountInput}
        label='Amount'
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>Add</button>
      {!amountValid && <p>Enter valid amount</p>}
    </form>
  );
};

export default FoodItemForm;
