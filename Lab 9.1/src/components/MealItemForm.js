import { useContext } from "react";
import CartContext from "../store/cart-context";

// Comp hien thi Form de them mon an
function MealItemForm({ data }) {
  const state = useContext(CartContext);
  return (
    <div>
      <label>Amount</label>
      <input value={data.totalAmount} onChange={() => {}} />
      <button onClick={() => state.addItem(data)}>+ Add</button>
    </div>
  );
}

export default MealItemForm;
