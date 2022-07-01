import { useState } from 'react';
import classes from './OrderForm.module.css';

const OrderForm = (props) => {
  const [formValid, setFormValid] = useState(false);

  const [formInputs, setFormInputs] = useState({
    fname: '',
    lname: '',
    address: '',
    city: '',
  });

  const [formValidation, setFormValidation] = useState({
    fname: true,
    lname: true,
    address: true,
    city: true,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormInputs((prev) => {
      return { ...prev, [id]: value };
    });
  };

  const isEmpty = (value) => value.trim() === '';

  const formValidate = (e) => {
    e.preventDefault();
    setFormValidation((prev) => {
      return { ...prev, fname: !isEmpty(formInputs.fname) };
    });
    setFormValidation((prev) => {
      return { ...prev, lname: !isEmpty(formInputs.lname) };
    });
    setFormValidation((prev) => {
      return { ...prev, address: !isEmpty(formInputs.address) };
    });
    setFormValidation((prev) => {
      return { ...prev, city: !isEmpty(formInputs.city) };
    });

    setFormValid(
      formValidation.fname &&
        formValidation.lname &&
        formValidation.address &&
        formValidation.city
    );

  };

  return (
    <form onSubmit={formValidate}>
      <div className={classes.inputfield}>
        <label htmlFor='fname'>First Name</label>
        <input onChange={handleChange} type='text' id='fname' />
        {!formValidation.fname && <p>Enter your name</p>}
      </div>
      <div className={classes.inputfield}>
        <label htmlFor='lname'>Last Name</label>
        <input onChange={handleChange} type='text' id='lname' />
        {!formValidation.lname && <p>Enter your last name</p>}
      </div>
      <div className={classes.inputfield}>
        <label htmlFor='address'>Address</label>
        <input onChange={handleChange} type='text' id='address' />
        {!formValidation.address && <p>Enter your address</p>}
      </div>
      <div className={classes.inputfield}>
        <label htmlFor='city'>City</label>
        <input onChange={handleChange} type='text' id='city' />
        {!formValidation.city && <p>Enter your city</p>}
      </div>
      <div className={classes.buttons}>
        <button
          className={classes['button--alt']}
          type='button'
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button>Confirm</button>
      </div>
    </form>
  );
};

export default OrderForm;
