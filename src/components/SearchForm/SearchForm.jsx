import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import {
  StyledForm,
  InputLabel,
  InputGroupLabel,
  Field,
  InputMin,
  InputMax,
  ButtonWrapper,
  StyledButton,
  Error,
} from './SearchForm.styled';
import { setFilter } from '../../redux/slice';
import { selectFilter } from '../../redux/selectors';
import useForm from '../../hooks/useForm';
import toast from 'react-hot-toast';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { useRef } from 'react';

const INITIAL_STATE = {
  carBrand: '',
  maxPrice: '',
  min: '',
  max: '',
};

const selectStyles = {
  padding: '8px 10px 8px 10px',
  borderRadius: 14,
  borderColor: 'transparent',
  outlineColor: 'transparent',
  backgroundColor: '#f7f7fb',
  color: '#121417',
  fontSize: 18,
  fontWeight: 500,
  lineHeight: 1.1,
};

const SearchForm = ({ brands, prices }) => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const brandSelectRef = useRef();
  const priceSelectRef = useRef();

  const CreateInitialFilter = () => {
    if (!filter) return { ...INITIAL_STATE };
    const { carBrand, maxPrice, mileageRange } = filter;
    return { carBrand, maxPrice, min: mileageRange.min, max: mileageRange.max };
  };

  const { values, errors, handleInputChange, reset } = useForm(CreateInitialFilter);

  const handleSelect = (selected, { name }) => {
    console.log(selected);
    console.log(name);
    let value;
    if (selected === null) {
      value = '';
    } else value = selected.value;
    return handleInputChange({ target: { name, value } });
  };

  const resetFilter = () => {
    reset(INITIAL_STATE);
    dispatch(setFilter(null));
    brandSelectRef.current.clearValue();
    priceSelectRef.current.clearValue();
  };

  const carBrandId = nanoid();
  const maxPriceId = nanoid();

  const priceOptions = prices.map(price => ({ value: price, label: price }));
  const brandOptions = brands.map(brand => ({ value: brand, label: brand }));

  const handleSubmit = evt => {
    evt.preventDefault();
    const { carBrand, maxPrice, min, max } = values;

    if (
      Object.keys(errors).length === 0 &&
      Object.values(values).filter(value => value != '').length !== 0
    ) {
      dispatch(setFilter({ carBrand: carBrand, maxPrice, mileageRange: { min, max } }));
    } else toast.error('Validation error found or values are empty!');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Field>
        <InputLabel htmlFor={carBrandId}>Car brand </InputLabel>
        <Select
          ref={brandSelectRef}
          styles={{
            control: baseStyles => ({
              ...baseStyles,
              ...selectStyles,
              width: 220,
            }),
          }}
          placeholder="Enter the text"
          options={brandOptions}
          isClearable={true}
          id={carBrandId}
          name="carBrand"
          onChange={handleSelect}
        />
      </Field>
      <Field>
        <InputLabel htmlFor={maxPriceId}>Price / 1 hour</InputLabel>
        <CreatableSelect
          ref={priceSelectRef}
          styles={{
            control: baseStyles => ({
              ...baseStyles,
              ...selectStyles,
              width: 140,
            }),
          }}
          placeholder="To $"
          options={priceOptions}
          isClearable={true}
          id={maxPriceId}
          name="maxPrice"
          onChange={handleSelect}
        />
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

SearchForm.propTypes = {
  brands: PropTypes.arrayOf(PropTypes.string).isRequired,
  prices: PropTypes.arrayOf(PropTypes.number).isRequired,
};
export default SearchForm;
