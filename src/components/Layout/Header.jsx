import classes from './Header.module.css';
import coverImage from '../../assets/cover.jpg'

const Header = props => {
  return <>
    <header className={classes.header}>
      <h1>Food Order App</h1>
      <button>Cart</button>
    </header>
    <div className={classes['main-image']}>
      <img src={coverImage} alt='cover image'/>
    </div>
  </>
};

export default Header;