import styled from 'styled-components';

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: center;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 16px;
  position: relative;
`;

const labelStyles = `
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 128%; 
`;

const InputLabel = styled.label`
  ${labelStyles}
`;

const InputGroupLabel = styled.p`
  ${labelStyles}
`;

const StyledInput = styled.input`
  padding: 14px 18px 14px 18px;
  border-radius: 14px;
  border-color: transparent;
  outline-color: transparent;
  background-color: #f7f7fb;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 110%;
  position: relative;

  &:hover {
    border: solid 1px hsl(0, 0%, 70%);
  }

  &::placeholder {
    color: #121417;
  }

  /* Webkit (Chrome, Safari, Edge) */
  &::-webkit-calendar-picker-indicator {
    /* Your styles here */
    background-color: #007bff; /* Change background color */
    color: #fff; /* Change text color */
    border: none; /* Remove border */
    border-radius: 5px; /* Apply border radius */
  }

  /* Firefox */
  &::-moz-calendar-picker-indicator {
    /* Your styles here */
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
  }

  /* Edge */
  &::-ms-clear {
    /* Your styles here */
    display: none; /* Hide the default clear button (if needed) */
  }
`;

const InputMin = styled.input`
  width: 100px;

  padding: 14px 24px;
  border-radius: 14px 0px 0px 14px;
  border-color: transparent;
  outline-color: transparent;

  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background-color: #f7f7fb;

  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: calc(20 / 18);

  &:hover {
    border: solid 1px hsl(0, 0%, 70%);
  }

  &::placeholder {
    color: #121417;
  }
`;

const InputMax = styled.input`
  width: 100px;

  padding: 14px 24px;
  border-radius: 0px 14px 14px 0px;

  background-color: #f7f7fb;
  border-color: transparent;
  outline-color: transparent;

  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: calc(20 / 18);

  &:hover {
    border: solid 1px hsl(0, 0%, 70%);
  }
  &::placeholder {
    color: #121417;
  }
`;

const StyledDatalist = styled.datalist`
  position: absolute;
  border: 0 none;
  /* left: -50%; */
  overflow-x: hidden;
  overflow-y: auto;
  datalist option {
    font-size: 0.8em;
    padding: 0.3em 1em;
    background-color: #ccc;
    cursor: pointer;
  }

  datalist option:hover,
  datalist option:focus {
    color: #fff;
    background-color: #036;
    outline: 0 none;
  }
`;

const StyledOption = styled.option`
  font-size: 0.8em;
  padding: 0.3em 1em;
  /* background-color: #ccc; */
  background-color: red;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #036;
    outline: 0 none;
  }
`;

const Error = styled.p`
  color: red;
  width: 100px;
  font-size: 10px;
  position: absolute;
  bottom: -20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 16px;
`;

const StyledButton = styled.button`
  cursor: pointer;
  margin-top: auto;
  padding: 14px 44px;
  border-radius: 12px;
  background-color: #3470ff;
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 143%;
  &:hover,
  &:focus {
    background-color: #0b44cd;
    border-color: #0b44cd;
  }
  &:disabled,
  &[disabled] {
    cursor: initial;
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
`;

export {
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
};
