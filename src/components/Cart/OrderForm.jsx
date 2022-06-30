import classes from './OrderForm.module.css';

const OrderForm = (props) => {

  const formValidate = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={formValidate}>
      <div className={classes.inputfield}>
        <label htmlFor='fname'>First Name</label>
        <input type='text' id='fname'/>
      </div>
      <div className={classes.inputfield}>
        <label htmlFor='lname'>Last Name</label>
        <input type='text' id='lname'/>
      </div>
      <div className={classes.inputfield}>
        <label htmlFor='address'>Address</label>
        <input type='text' id='address'/>
      </div>
      <div className={classes.inputfield}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city'/>
      </div>
      <button type="button" onClick={props.onCancel}>Cancel</button>
      <button>Confirm</button>
    </form>
  )
}

export default OrderForm;