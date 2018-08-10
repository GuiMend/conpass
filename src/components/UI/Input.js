import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

const Wrapper = styled.div`
  flex-grow: 2;
  margin-bottom: 24px;
`;

const CustomTextField = styled(TextField)`
  && {
	label {
	  font-weight: 500;
	  font-size: 1.3em;
	}
    input {
	  margin-top: 10px;
      background: white;
      border: 1px solid #ced4da;
	  border-radius: 4px;
	  padding: 10px 12px
	  
	  :focus {
		border-color: #12c1c7
		box-shadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
	  }
    }
  }
`;

const Error = styled.span`
  color: red;
`;

const Input = props => {
  const {
    field,
    form: { touched, errors }
  } = props;
  return (
    <Wrapper>
      <CustomTextField
        fullWidth
        InputProps={{
          disableUnderline: true
        }}
        InputLabelProps={{
          shrink: true
        }}
        {...field}
        {...props}
      />
      {touched[field.name] &&
        errors[field.name] && <Error>{errors[field.name]}</Error>}
    </Wrapper>
  );
};

export default Input;
