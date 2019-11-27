import React from 'react';
import { shape, string, bool, func } from 'prop-types';
import { Field, Form } from 'formik';
import useFormHook from './formHook';
import { FLD, COPY } from '../constants';
import { Box, Error } from '../../design-system/atoms';
import {
  Headline,
  FormikSubmitButton,
  FormikInput,
} from '../../design-system/molecules';

const propTypes = {
  isSubmitting: bool,
  handleSubmit: func.isRequired,
  error: string,
  values: shape({
    searchTerm: string,
  }),
};

const defaultProps = {
  isSubmitting: false,
  error: '',
  tweets: [],
  values: {
    searchTerm: '',
  },
};

const showHideError = error => (
  <Box mt="20px" display="flex" justifyContent="center">
    <Error fontSize="16px" lineHeight="22px" key={error}>
      {error}
    </Error>
  </Box>
);

const SearchTweetsForm = ({ isSubmitting, error, handleSubmit }) => (
  <Form
    noValidate
    onSubmit={e => {
      e.preventDefault();
      handleSubmit();
    }}
  >
    <Box maxContentWidth={300} mb={[0, 0]}>
      <Box mt={[24, 35]} mb={[20, 20]} textAlign="left">
        <Headline>{COPY.TWEETS_HEADING}</Headline>
      </Box>

      <Box display="flex" flexWrap="wrap" alignItems="top">
        <Box
          flex={['40%', '30%']}
          mb={[18, 32]}
          borderRight="12px solid transparent"
        >
          <Field
            name="searchTerm"
            placeholder={''}
            label={'Search Term'}
            component={FormikInput}
          />
        </Box>

        <Box display="inline" alignItems="bottom" mt={[25, 25]} height="100%">
          <Field
            component={props => (
              <FormikSubmitButton
                disabled={isSubmitting}
                errorMessage={'error'}
                {...props}
              />
            )}
            name="submit"
          >
            {FLD.BTN_SUBMIT}
          </Field>
        </Box>
      </Box>
      {showHideError(error)}
    </Box>
  </Form>
);

SearchTweetsForm.propTypes = propTypes;
SearchTweetsForm.defaultProps = defaultProps;

export default useFormHook(SearchTweetsForm);
