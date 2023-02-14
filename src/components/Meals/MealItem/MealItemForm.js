import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <button>+ add</button>
    </form>
  );
};
export default MealItemForm;
