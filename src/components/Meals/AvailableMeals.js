import classes from "./AvailableMeals.module.css";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Rainbow Panzanella Salad",
    description: "Colorful salad with a dash of toasted bread",
    price: 19.5,
  },
  {
    id: "m3",
    name: "Sweet Potato Salad",
    description: "Roasted sweet potatoes with greens",
    price: 16.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
