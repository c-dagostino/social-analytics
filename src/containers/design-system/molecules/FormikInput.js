import React from 'react';
import { shape, string, arrayOf, oneOfType, instanceOf } from 'prop-types';

import { ErrorMessage } from 'formik';

import { Box, Input, MaskedInput, Label, Error } from '../atoms';

const FormikInput = ({ field, form, label, mask, ...props }) => {
  const { errors, touched, status, isSubmitting } = form;
  const { name, value, placeholder } = field;

  const duplicateValue = status && status.duplicates && status.duplicates[name];
  const isFieldInvalid = touched && errors && !!errors[name] && !!touched[name];
  const isDuplicate = duplicateValue === value;
  const isInvalid = isDuplicate || isFieldInvalid;
  const InputComponent = mask ? MaskedInput : Input;

  return (
    <Label error={isInvalid} htmlFor={name} textStyle="display1">
      {label && <Box marginBottom="8px">{label}</Box>}
      <Box
        position="relative"
        id={`${name}_error`}
        aria-label={errors && errors[name]}
      >
        <InputComponent
          id={name}
          data-testid={`input-${name}`}
          aria-label={placeholder}
          aria-invalid={isInvalid}
          aria-describedby={`${name}_error`}
          error={isInvalid}
          disabled={isSubmitting}
          mask={mask}
          {...props}
          {...field}
        />
        <Box mt="6px">
          <ErrorMessage
            component={Error}
            name={name}
            data-testid={`error-${name}`}
          />
        </Box>
      </Box>
    </Label>
  );
};

FormikInput.propTypes = {
  field: shape({}),
  form: shape({}),
  label: string,
  mask: arrayOf(oneOfType([instanceOf(RegExp), string,])),
};

FormikInput.defaultProps = {
  field: {},
  form: {},
  label: null,
  mask: null,
};

export default FormikInput;
