import classes from "./CheckoutForm.module.css";
import useInput from "../../hooks/use-input";

const CheckoutForm = (props) => {
  /* Validation functions for form inputs hook */
  const textValidationFn = (value) => {
    return value.trim() !== "";
  };
  const postalCodeValidationFn = (value) => {
    return value.trim().length > 0 && !isNaN(value);
    // value.isNaN() returns true if a string converted to a number is NaN. If it returns false, the value is a number. It will also give true if the string value is empty, this is why length of value is checked.
  };

  /* Name */
  const {
    enteredValue: nameValue,
    isValid: isNameValid,
    hasError: nameHasError,
    inputChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    resetValue: resetNameValue,
  } = useInput(textValidationFn);

  /* Street */
  const {
    enteredValue: streetValue,
    isValid: isStreetValid,
    hasError: streetHasError,
    inputChangeHandler: streetInputChangeHandler,
    inputBlurHandler: streetInputBlurHandler,
    resetValue: resetStreetValue,
  } = useInput(textValidationFn);

  /* Postal Code */
  const {
    enteredValue: postalValue,
    isValid: isPostalValid,
    hasError: postalHasError,
    inputChangeHandler: postalInputChangeHandler,
    inputBlurHandler: postalInputBlurHandler,
    resetValue: resetPostalValue,
  } = useInput(postalCodeValidationFn);

  /* City */
  const {
    enteredValue: cityValue,
    isValid: isCityValid,
    hasError: cityHasError,
    inputChangeHandler: cityInputChangeHandler,
    inputBlurHandler: cityInputBlurHandler,
    resetValue: resetCityValue,
  } = useInput(textValidationFn);

  const confirmHandler = (event) => {
    event.preventDefault();
    if (!isFormValid) {
      return;
    }
    console.log("form submitted!");
    resetNameValue();
    resetStreetValue();
    resetPostalValue();
    resetCityValue();
  };

  /* Whole form validation */
  let isFormValid = false;
  if (isNameValid && isStreetValid && isPostalValid && isCityValid) {
    isFormValid = true;
  }

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          type="text"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={nameValue}
        />
        {nameHasError && <p>Please use valid name</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street Name</label>
        <input
          id="street"
          type="text"
          onChange={streetInputChangeHandler}
          onBlur={streetInputBlurHandler}
          value={streetValue}
        />
        {streetHasError && <p>Please use valid street</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input
          id="postal"
          type="text"
          onChange={postalInputChangeHandler}
          onBlur={postalInputBlurHandler}
          value={postalValue}
        />
        {postalHasError && <p>Please use valid postal code</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          onChange={cityInputChangeHandler}
          onBlur={cityInputBlurHandler}
          value={cityValue}
        />
        {cityHasError && <p>Please use valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Confirm Order</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
