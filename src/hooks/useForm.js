import { useState } from 'react';
import { omit } from 'lodash';

const useForm = initialCallback => {
  const [values, setValues] = useState(initialCallback);
  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    switch (name) {
      case 'maxPrice':
        if (!Number.isInteger(Number(value)) || Number(value) > 1000) {
          setErrors({
            ...errors,
            maxPrice: 'Price must be an integer number less than $1000!',
          });
        } else {
          setErrors(omit(errors, 'maxPrice'));
        }
        break;

      case 'min':
        if (!Number.isInteger(Number(value))) {
          setErrors({
            ...errors,
            min: '"From" value must be an integer!',
          });
        } else if (values.max && Number(value) > Number(values.max)) {
          setErrors({
            ...errors,
            max: '"From" value must be less than "To" value!',
          });
        } else {
          setErrors(omit(errors, 'min'));
        }
        break;

      case 'max':
        if (!Number.isInteger(Number(value))) {
          setErrors({
            ...errors,
            max: '"To" value must be an integer!',
          });
        } else if (Number(value) < Number(values.min)) {
          setErrors({
            ...errors,
            max: '"To" value must be more than "From" value!',
          });
        } else {
          setErrors(omit(errors, 'max'));
        }
        break;

      default:
        break;
    }
  };

  const handleInputChange = evt => {
    evt.persist();

    validate(evt.target.name, evt.target.value);
    setValues({ ...values, [evt.target.name]: evt.target.value.trim() });
  };

  const reset = (resetState = {}) => {
    setValues({ ...resetState });
  };

  return {
    values,
    errors,
    handleInputChange,
    reset,
  };
};

export default useForm;
