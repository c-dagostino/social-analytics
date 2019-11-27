import * as yup from 'yup';
import { withFormik } from 'formik';
import * as validators from '../utils/validators';

const mapPropsToValues = () => {
  const newValues = {
    searchTerm: '',
    error: null,
    tweets: [],
  };

  return newValues;
};

const validationSchema = () =>
  yup.lazy(() => {
    return yup.object().shape({
      searchTerm: validators.searchTerm,
    });
  });

const displayName = 'Tweets';
const validateOnBlur = true;
const validateOnChange = true;

const formikConfig = {
  mapPropsToValues,
  validationSchema,
  displayName,
  validateOnBlur,
  validateOnChange,
};

const useFormHook = form =>
  withFormik({
    ...formikConfig,
    handleSubmit: (values, { props: { onSubmit } }) => {
      onSubmit(values);
    },
  })(form);

export default useFormHook;
