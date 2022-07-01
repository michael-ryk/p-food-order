import { useState } from 'react';
import classes from './OrderForm.module.css';

const OrderForm = (props) => {

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

    const fnameValid = !isEmpty(formInputs.fname)
    const lnameValid = !isEmpty(formInputs.lname)
    const addressValid = !isEmpty(formInputs.address)
    const cityValid = !isEmpty(formInputs.city)
    
    const formValid = fnameValid && lnameValid && addressValid && cityValid;

    setFormValidation({
      fname: fnameValid,
      lname: lnameValid,
      address: addressValid,
      city: cityValid
    });

    if (!formValid) {
      return;
    }

    //Submit form
    console.log("Form Valid - Submit it next")
  };

  return (
    <form onSubmit={formValidate}>
      <div className={classes.inputfield}>
        <label htmlFor='fname'>First Name</label>
        <input onChange={handleChange} type='text' id='fname' value={formInputs.fname}/>
        {!formValidation.fname && <p>Enter your name</p>}
      </div>
      <div className={classes.inputfield}>
        <label htmlFor='lname'>Last Name</label>
        <input onChange={handleChange} type='text' id='lname' value={formInputs.lname}/>
        {!formValidation.lname && <p>Enter your last name</p>}
      </div>
      <div className={classes.inputfield}>
        <label htmlFor='address'>Address</label>
        <input onChange={handleChange} type='text' id='address' value={formInputs.address}/>
        {!formValidation.address && <p>Enter your address</p>}
      </div>
      <div className={classes.inputfield}>
        <label htmlFor='city'>City</label>
        <input onChange={handleChange} type='text' id='city' value={formInputs.city}/>
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
