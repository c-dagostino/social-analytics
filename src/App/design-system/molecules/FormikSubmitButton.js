import React, { useState, useEffect } from 'react';
import { shape, string, node, number, arrayOf } from 'prop-types';

import { Box, Button, Error } from '../atoms';

const FormikSubmitButton = ({
  field,
  form,
  submitCount,
  children,
  errorMessage,
  submitErrors,
  ...props
}) => {
  const { errors, touched } = form;
  const { name, placeholder } = field;
  const [invalid, setInvalid] = useState(false);
  const [formErrors, setFormErrors] = useState([]);
  const bg = invalid ? { bg: 'errorRed' } : null;

  const FormErrors = () => {
    const errorMessages = formErrors.map(msg => (
      <Error key={msg} fontSize="16px">
        {msg}
      </Error>
    ));
    return <Box mt="21px">{errorMessages}</Box>;
  };

  useEffect(() => {
    const fieldsWithErrors = Object.keys(touched).filter(
      errorFieldName => errors[errorFieldName],
    );

    const formHasSubmitErrors = submitErrors.length > 0;
    const formHasValidationErrors = fieldsWithErrors.length > 0;
    const shouldShowSubmitError = submitCount > 0;

    setInvalid(
      formHasSubmitErrors || (formHasValidationErrors && shouldShowSubmitError),
    );

    if (formHasSubmitErrors) {
      setFormErrors(submitErrors);
    } else if (formHasValidationErrors) {
      setFormErrors([errorMessage]);
    }
  }, [
    errorMessage,
    errors,
    form,
    submitCount,
    submitErrors,
    submitErrors.length,
    touched,
  ]);

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      id={`${name}_error`}
      aria-label={errors && errors[name]}
    >
      <Button
        id={name}
        type="submit"
        aria-label={placeholder}
        aria-invalid={invalid}
        aria-describedby={`${name}_error`}
        {...bg}
        {...props}
        {...field}
      >
        {children}
      </Button>
      {invalid && <FormErrors />}
    </Box>
  );
};

FormikSubmitButton.propTypes = {
  field: shape({}),
  form: shape({}),
  children: node.isRequired,
  errorMessage: string,
  submitCount: number,
  submitErrors: arrayOf(string),
};

FormikSubmitButton.defaultProps = {
  field: {},
  form: {},
  errorMessage: '',
  submitCount: 0,
  submitErrors: [],
};

export default FormikSubmitButton;
