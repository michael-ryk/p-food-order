import { useState } from 'react';
import Header from './components/Layout/Header';
import Food from './components/Food/Food';
import Cart from './components/Cart/Cart';
import ItemsProvider from './components/store/ItemsProvider';
import classes from './App.module.css';

function App() {

  const [modalShown, setModalShown] = useState(false);

  const revealModal = () => {
    setModalShown(true);
  }

  const hideModal = () => {
    setModalShown(false);
  }

  return (
    <ItemsProvider>
      {modalShown && <Cart onCloseClick={hideModal} />}
      <Header onPressCart={revealModal} />
      <main className={classes.main}>
        <Food />
      </main>
    </ItemsProvider>
  );
}

export default App;
