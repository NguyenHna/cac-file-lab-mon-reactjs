import Card from "./UI/Card";
import meals from "./Meals/MealsSummary.module.css";

//Component hien thi doan van ban
function MealsSummary() {
  return (
    <Card>
      <div className={meals.summary}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of availiable meals
          and enjeoy a delicious lunch or dinner at home <br /> All our meals
          are cooked with high-quality ingredients, just-in-time and of course
          by experienced chefs!
        </p>
      </div>
    </Card>
  );
}

export default MealsSummary;
