import classes from './Header.module.css';
import coverImage from '../../assets/cover.jpg'
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
  return <>
    <header className={classes.header}>
      <h1>Food Order App</h1>
      <HeaderCartButton />
    </header>
    <div className={classes['main-image']}>
      <img src={coverImage} alt='cover'/>
    </div>
  </>
};

export default Header;