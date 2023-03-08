import { useState, useEffect, useCallback } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
/* const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Made with fine veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Rainbow Panzanella Salad",
    description: "Colorful salad with toasted bread",
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
]; */

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  const fetchMealsHandler = useCallback(async () => {
    setHttpError(false);
    try {
      const response = await fetch(
        "https://react-meals-hexfloo-default-rtdb.firebaseio.com/meals.json",
        { method: "GET" }
      );
      if (!response.ok) {
        throw new Error("Fetch went wrong"); // this error will be handled in catch{}
      }
      const data = await response.json();
      const loadedMeals = []; // transforming the data recieved from firebase (object) to an array of objects.
      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
          // this is based on how the data is saved in the db. The key is the id of the item and it's value is an object with the rest of the data.
        });
      }
      setMeals(loadedMeals);
    } catch (err) {
      setIsLoading(false); //so error message will show
      setHttpError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMealsHandler().catch((err) => {
      setIsLoading(false); //so error message will show
      setHttpError(err.message);
    });
  }, [fetchMealsHandler]);

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        {httpError && <h3 style={{ textAlign: "center" }}>{httpError}</h3>}
        {isLoading && <h3 style={{ textAlign: "center" }}>Loading meals...</h3>}
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
