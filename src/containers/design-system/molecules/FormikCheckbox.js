import React, { useState, useEffect } from 'react';
import { bool, shape, node, string } from 'prop-types';
import { ErrorMessage } from 'formik';

import { Box, Checkbox, Label, Error } from '../atoms';

const FormikCheckbox = ({
  field,
  form,
  disabled,
  footer,
  children,
  ...props
}) => {
  const { errors, touched, isSubmitting } = form;
  const { name, value } = field;
  const [invalid, setInvalid] = useState(false);

  useEffect(() => {
    setInvalid(touched && errors && !!errors[name] && !!touched[name]);
  }, [touched, errors, name]);

  const doBlur = e => {
    e.target.blur();
  };

  return (
    <>
      <Label
        error={invalid}
        dimmed={!value}
        htmlFor={name}
        textStyle="display2"
      >
        <Box display="flex" alignItems="center">
          <Box mr="28px">
            <Checkbox
              name={name}
              size={28}
              error={invalid}
              disabled={isSubmitting}
              onClick={doBlur}
              {...props}
              {...field}
            />
          </Box>
          <div>{children}</div>
        </Box>
        {footer && <Box mt="16px">{footer}</Box>}
        <Box mt="9px" ml="56px">
          <ErrorMessage component={Error} name={name} />
        </Box>
      </Label>
    </>
  );
};

FormikCheckbox.displayName = 'FormikCheckbox';

FormikCheckbox.propTypes = {
  field: shape({}),
  form: shape({}),
  disabled: bool,
  children: node,
  footer: string,
};

FormikCheckbox.defaultProps = {
  field: {},
  form: {},
  disabled: false,
  children: null,
  footer: null,
};

export default FormikCheckbox;
