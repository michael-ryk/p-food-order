import Header from './components/Layout/Header';
import Food from './components/Food/Food';
import classes from './App.module.css';

function App() {
  return (
    <>
      <Header />
      <main className={classes.main}>
        <Food />
      </main>
    </>
  );
}

export default App;
