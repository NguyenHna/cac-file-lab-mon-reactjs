import meals from "./Meals/AvailableMeals.module.css";
import { DUMMY_MEALS } from "./data";
import Card from "./UI/Card";
import MealItemForm from "./MealItemForm";

//Component hien thi danh sach mon an
function AvailableMeals() {
  return (
    <Card>
      <div className={meals.meals}>
        <ul>
          {DUMMY_MEALS.map((data) => (
            <li key={data.id}>
              <div>
                <b>{data.name}</b>
                <i>{data.description}</i>
                <p>{`$ ${data.price}`}</p>
              </div>
              <MealItemForm data={{ items: data.name, totalAmount: 1 }} />
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

export default AvailableMeals;
