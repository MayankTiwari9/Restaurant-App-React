import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import MealList from "./Components/Meals/MealList";
import Summary from "./Components/UI/Summary";

function App() {
  return (
    <>
      <Cart />
      <Header />
      <Summary />
      <MealList />
    </>
  );
}

export default App;
