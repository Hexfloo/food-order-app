import { useState } from "react";

const useInput = (validateValueFn) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isEnteredValueTouched, setIsEnteredValueTouched] = useState(false);

  const isValid = validateValueFn(enteredValue); // Validation of value is based on a validation function which is a mandatory argument in this custom hook.
  const hasError = isEnteredValueTouched && !isValid;

  const inputChangeHandler = (event) => {
    const value = event.target.value;
    setEnteredValue(value);
  };

  const inputBlurHandler = () => {
    setIsEnteredValueTouched(true);
  };

  const resetValue = () => {
    setEnteredValue("");
    setIsEnteredValueTouched(false);
  };

  return {
    /* This hook returns the value itself, boolean regarding input validity, 
    does the value have an error, input change handler function, 
    input blur handler function, reset value function */
    enteredValue,
    isValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    resetValue,
  };
};

export default useInput;
