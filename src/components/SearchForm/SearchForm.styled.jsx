import styled from 'styled-components';

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  gap: 18px;
  justify-content: center;
`;

const Field = styled.div`
  /* width: 224px; */
  /* height: auto; */
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const labelStyles = `
  color: #8a8a89;
  /* font-family: Manrope; */
  font-size: 14px;
  font-weight: 500;
  line-height: 18px; //???18/14
`;

const InputLabel = styled.label`
  ${labelStyles}
`;

const InputGroupLabel = styled.p`
  ${labelStyles}
`;

const StyledInput = styled.input`
  position: relative;

  padding: 14px 18px 14px 18px;
  border-radius: 14px;
  border-color: transparent;
  outline-color: transparent;

  background-color: #f7f7fb;
  color: #121417;

  /* font-family: Manrope; */
  font-size: 18px;
  /* font-style: normal; */
  font-weight: 500;
  line-height: 20px; /* 111.111% */
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
  /* font-family: Manrope; */
  font-size: 18px;
  /* font-style: normal; */
  font-weight: 500;
  line-height: 20px; /* 111.111% */
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
  /* font-family: Manrope; */
  font-size: 18px;
  /* font-style: normal; */
  font-weight: 500;
  line-height: 20px; /* 111.111% */
  &::placeholder {
    
    color: #121417;
  }
`;

const StyledDatalist = styled.datalist`
  position: absolute;
  /* max-height: 20em; */
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
  background-color: #ccc;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #036;
    outline: 0 none;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const StyledButton = styled.button`
  cursor: pointer;
  /* display: inline-flex; */
  margin-top: auto;
  padding: 14px 44px;

  /* justify-content: center; */
  /* align-items: center;
   */
  /* margin-top: auto; */
  /* width: 100%; */
  /* padding: 12px 0; */
  border-radius: 12px;
  background-color: #3470ff;
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
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
};
