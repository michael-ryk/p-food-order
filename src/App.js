import { useState } from 'react';
import Header from './components/Layout/Header';
import Food from './components/Food/Food';
import Cart from './components/Cart/Cart';
import classes from './App.module.css';

function App() {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && <Cart />}
      <Header />
      <main className={classes.main}>
        <Food />
      </main>
    </>
  );
}

export default App;
