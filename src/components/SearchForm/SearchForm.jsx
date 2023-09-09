import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';

import * as SC from './SearchForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/slice';
import { selectFilter } from '../../redux/selectors';
import brands from '../../data/makes.json';

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

  const [values, setValues] = useState(CreateInitialFilter);

  const reset = () => {
    setValues({ ...INITIAL_STATE });
    dispatch(setFilter(null));
  };

  const carBrandId = nanoid();
  const maxPriceId = nanoid();

  const handleInputChange = evt => {
    setValues({ ...values, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const { carBrand, maxPrice, min, max } = values;
    dispatch(setFilter({ carBrand, maxPrice, mileageRange: { min, max } }));
  };

  return (
    <SC.StyledForm onSubmit={handleSubmit}>
      <SC.Field>
        <SC.InputLabel htmlFor={carBrandId}>Car brand </SC.InputLabel>
        <SC.StyledInput
          style={{ width: 200 }}
          list="brands"
          placeholder="Enter the text"
          name="carBrand"
          id={carBrandId}
          value={values.carBrand}
          autoComplete="off"
          onChange={handleInputChange}
        />
        <SC.StyledDatalist id="brands">
          {brands.map((brand, idx) => (
            <SC.StyledOption key={idx}>{brand}</SC.StyledOption>
          ))}
        </SC.StyledDatalist>
      </SC.Field>
      <SC.Field>
        <SC.InputLabel htmlFor={maxPriceId}>Price / 1 hour</SC.InputLabel>
        <SC.StyledInput
          style={{ width: 120 }}
          list="prices"
          placeholder="To $"
          name="maxPrice"
          id={maxPriceId}
          value={values.maxPrice}
          autoComplete="off"
          onChange={handleInputChange}
        />

        <SC.StyledDatalist id="prices">
          <option>30</option>
          <option>40</option>
          <option>50</option>
          <option>100</option>
          <option>200</option>
        </SC.StyledDatalist>
      </SC.Field>
      <SC.Field role="group" aria-labelledby="mileage-inputs">
        <SC.InputGroupLabel id="mileage-inputs">Сar mileage / km</SC.InputGroupLabel>
        <div>
          <SC.InputMin
            placeholder="From"
            type="text"
            name="min"
            value={values.min}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <SC.InputMax
            placeholder="To"
            type="text"
            name="max"
            value={values.max}
            onChange={handleInputChange}
            autoComplete="off"
          />
        </div>
      </SC.Field>
      <SC.ButtonWrapper>
        <SC.StyledButton type="submit">Submit</SC.StyledButton>
      </SC.ButtonWrapper>
      <SC.ButtonWrapper>
        <SC.StyledButton type="button" disabled={!filter} onClick={reset}>
          Reset
        </SC.StyledButton>
      </SC.ButtonWrapper>
    </SC.StyledForm>
  );
};

export default SearchForm;
