import React from 'react';
import { shape, string } from 'prop-types';
import { ErrorMessage } from 'formik';

import { Box, Select, Label, Error } from '../atoms';

const FormikSelect = ({ field, form, label, ...props }) => {
  const { errors, touched, isSubmitting } = form;
  const { name, placeholder } = field;
  const isInvalid = touched && errors && !!errors[name] && !!touched[name];

  return (
    <>
      <Label error={isInvalid} htmlFor={name} textStyle="display1">
        {label && <Box marginBottom="8px">{label}</Box>}
        <Box
          position="relative"
          id={`${name}_error`}
          aria-label={errors && errors[name]}
        >
          <Select
            id={name}
            aria-label={placeholder}
            aria-invalid={isInvalid}
            aria-describedby={`${name}_error`}
            error={isInvalid}
            disabled={isSubmitting}
            {...props}
            {...field}
          />
          <Box mt="6px" ml="12px">
            <ErrorMessage component={Error} name={name} />
          </Box>
        </Box>
      </Label>
    </>
  );
};

FormikSelect.propTypes = {
  field: shape({}),
  form: shape({}),
  label: string,
};

FormikSelect.defaultProps = {
  field: {},
  form: {},
  label: null,
};

export default FormikSelect;
