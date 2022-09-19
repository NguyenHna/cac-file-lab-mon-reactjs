import { useState, useContext } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import CartContext from "./store/cart-context";

function App() {
  //hooks

  //func
  const state = useContext(CartContext);
  console.log(state);
  return (
    <div className="App">
      <Header />
      <Meals />
    </div>
  );
}

export default App;
