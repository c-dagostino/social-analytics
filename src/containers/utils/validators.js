import * as yup from 'yup';
import { MSG } from '../constants';
import { PasswordErrorMessage } from '../../design-system/molecules';

export const signInEmail = yup.string().required(MSG.MSG_REQ_EMAIL);
export const signInPassword = yup.string().required(MSG.MSG_REQ_PASSWORD);

/**
Password validation regular expression breakdown:
At least one uppercase character  (?=.*?[A-Z])
At least one number               (?=.*?[0-9])
Only these symbols & characters   [a-zA-Z0-9^$*.[\]{}()?\-"!@#%&/\\,><':;|_~`]
Min 8, Max 99 characters          {8,99}
*/
const passwordValidationRegex = /^(?=.*?[A-Z])(?=.*?[0-9])[a-zA-Z0-9^$*.[\]{}()?\-"!@#%&/\\,><':;|_~`]{8,99}$/;

export const password = yup
  .string()
  .required(MSG.MSG_REQ_PASSWORD)
  .matches(passwordValidationRegex, { message: PasswordErrorMessage });

export const confirmPassword = yup
  .string()
  .oneOf([yup.ref('userPassword'), null], MSG.MSG_REQ_CONFIRM_PASSWORD);

export const firstName = yup.string().required(MSG.MSG_REQ_FIRST_NAME);

export const lastName = yup.string().required(MSG.MSG_REQ_LAST_NAME);

export const signUpCode = yup.string().required(MSG.MSG_REQ_SIGNUP_CODE);
