import { useState } from 'react';
import Header from './components/Layout/Header';
import Food from './components/Food/Food';
import Cart from './components/Cart/Cart';

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
    <>
      {modalShown && <Cart onCloseClick={hideModal} />}
      <Header onPressCart={revealModal} />
      <main className={classes.main}>
        <Food />
      </main>
    </>
  );
}

export default App;
