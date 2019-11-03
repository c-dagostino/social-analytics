import * as yup from 'yup';
import { MSG } from '../constants';

export const signInEmail = yup.string().required(MSG.MSG_REQ_EMAIL);
export const signInPassword = yup.string().required(MSG.MSG_REQ_PASSWORD);
