import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import {
  StyledForm,
  InputLabel,
  InputGroupLabel,
  StyledInput,
  Field,
  StyledDatalist,
  StyledOption,
  InputMin,
  InputMax,
  ButtonWrapper,
  StyledButton,
  Error,
} from './SearchForm.styled';
import { setFilter } from '../../redux/slice';
import { selectFilter } from '../../redux/selectors';
import brands from '../../data/makes.json';
import useForm from '../../hooks/useForm';

const INITIAL_STATE = {
  carBrand: '',
  maxPrice: '',
  min: '',
  max: '',
};

const SearchForm = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const CreateInitialFilter = () => {
    if (!filter) return { ...INITIAL_STATE };
    const { carBrand, maxPrice, mileageRange } = filter;
    return { carBrand, maxPrice, min: mileageRange.min, max: mileageRange.max };
  };

  const { values, errors, handleInputChange, reset } = useForm(CreateInitialFilter);

  const resetFilter = () => {
    reset(INITIAL_STATE);
    dispatch(setFilter(null));
  };

  const carBrandId = nanoid();
  const maxPriceId = nanoid();

  const handleSubmit = evt => {
    evt.preventDefault();
    const { carBrand, maxPrice, min, max } = values;
    console.log(errors);
    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      dispatch(setFilter({ carBrand: carBrand, maxPrice, mileageRange: { min, max } }));
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Field>
        <InputLabel htmlFor={carBrandId}>Car brand </InputLabel>
        <StyledInput
          style={{ width: 200 }}
          list="brands"
          placeholder="Enter the text"
          name="carBrand"
          id={carBrandId}
          value={values.carBrand}
          autoComplete="off"
          onChange={handleInputChange}
        />
        <StyledDatalist id="brands">
          {brands.map((brand, idx) => (
            <StyledOption key={idx}>{brand}</StyledOption>
          ))}
        </StyledDatalist>
      </Field>
      <Field>
        <InputLabel htmlFor={maxPriceId}>Price / 1 hour</InputLabel>
        <StyledInput
          style={{ width: 120 }}
          list="prices"
          placeholder="To $"
          name="maxPrice"
          id={maxPriceId}
          value={values.maxPrice}
          autoComplete="off"
          onChange={handleInputChange}
        />
        <StyledDatalist id="prices">
          <option>30</option>
          <option>40</option>
          <option>50</option>
          <option>100</option>
          <option>200</option>
        </StyledDatalist>
        {errors.maxPrice && <Error>{errors.maxPrice}</Error>}
      </Field>
      <Field role="group" aria-labelledby="mileage-inputs">
        <InputGroupLabel id="mileage-inputs">Сar mileage / km</InputGroupLabel>
        <div>
          <InputMin
            placeholder="From"
            type="text"
            name="min"
            value={values.min}
            onChange={handleInputChange}
            autoComplete="off"
          />
          {errors.min && <Error>{errors.min}</Error>}

          <InputMax
            placeholder="To"
            type="text"
            name="max"
            value={values.max}
            onChange={handleInputChange}
            autoComplete="off"
          />
          {errors.max && <Error style={{ left: 100 }}>{errors.max}</Error>}
        </div>
      </Field>
      <ButtonWrapper>
        <StyledButton type="submit">Submit</StyledButton>
      </ButtonWrapper>
      <ButtonWrapper>
        <StyledButton type="button" disabled={!filter} onClick={resetFilter}>
          Reset
        </StyledButton>
      </ButtonWrapper>
    </StyledForm>
  );
};

export default SearchForm;
