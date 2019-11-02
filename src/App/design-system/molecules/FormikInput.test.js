import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Formik, Field } from 'formik';

import FormikInput from './FormikInput';

const theme = {
  colors: {},
  breakpoints: {},
  fontSizes: {},
  fonts: {},
  fontFamily: {},
  textStyles: {},
  radius: {},
  maxContentWidth: {},
};

afterEach(cleanup);

test('Input should render validation error given input field is left unfilled', async () => {
  const fieldName = 'firstName';
  const labelName = 'first name';
  const placeHolder = 'your first name';
  const errorMessage = 'required.';
  const { findByTestId, getByTestId } = render(
    <ThemeProvider theme={theme}>
      <Formik
        validate={values => {
          const errors = {};

          if (!values.firstName) {
            errors.firstName = errorMessage;
          }

          return errors;
        }}
      >
        <Field
          name={fieldName}
          placeholder={placeHolder}
          label={labelName}
          component={FormikInput}
        />
      </Formik>
    </ThemeProvider>,
  );

  const input = getByTestId(`input-${fieldName}`);

  fireEvent.blur(input);

  const validationErrors = await findByTestId(`error-${fieldName}`);

  expect(validationErrors.innerHTML).toBe(errorMessage);
});
