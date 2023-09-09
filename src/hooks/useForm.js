import { useState } from 'react';
import { omit } from 'lodash';

const useForm = initialCallback => {
  //Form values
  const [values, setValues] = useState(initialCallback);
  //Errors
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
            max: '"To" value must be more than min value!',
          });
        } else {
          setErrors(omit(errors, 'max'));
        }
        break;

      default:
        break;
    }
  };

  // const validate = (name, value) => {
  //   switch (name) {
  //     case 'maxPrice':
  //       if (!Number.isInteger(Number(value)) || Number(value) > 1000) {
  //         setErrors({
  //           ...errors,
  //           maxPrice: 'Price must be integer number less then $1000!',
  //         });
  //       } else {
  //         setErrors(omit(errors, 'maxPrice'));
  //       }
  //       break;

  //     case 'min':
  //       if (!Number.isInteger(Number(value))) {
  //         setErrors({
  //           ...errors,
  //           min: 'Min value must be integer number!',
  //         });
  //         console.log(errors);
  //       } else {
  //         setErrors(omit(errors, 'min'));
  //       }
  //       break;

  //     case 'max':
  //       console.log(value);
  //       if (!value || !Number.isInteger(Number(value))) {
  //         setErrors({
  //           ...errors,
  //           max: 'Max value must be integer number!',
  //         });
  //         console.log(errors);
  //         break;
  //       }

  //       console.log(value);
  //       console.log(values.min);

  //       if (Number(value) < Number(values.min)) {
  //         console.log(Number(value) < Number(values.min), errors);
  //         setErrors({ ...errors, max: 'Max value must be more then min value!' });
  //         console.log(errors);

  //         break;
  //       }

  //       console.log(value);
  //       console.log(errors);

  //       setErrors(omit(errors, 'max'));
  //       break;

  //     default:
  //       break;
  //   }
  // };

  const handleInputChange = evt => {
    // evt.persist();

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
