import React from 'react';

// URLs
const URL_TARGET = '_new';
const URL_TOS = 'https://sightbox.com/customer-terms-of-service/';
const URL_PRIVACY_POLICY = 'https://sightbox.com/privacy-policy/';
const URL_LOGIN = 'https://members.sightbox.com/sign-in';
const URL_RESET_PW = 'https://members.sightbox.com/sign-in';
const URL_EMAIL_SUPPORT = 'mailto:support@sightbox.com';

// COPY
// Plan page copy
const PLAN_HEADING = 'Pick Your Plan';
const PLAN_INTRO = 'You can always change plans after your eye exam.';
const PLAN_FEATURES_HEADING = 'All Sightbox\nMemberships Include:';
const PLAN_FEATURE_LIST = [
  'Comprehensive Eye Exam',
  'Contact Lens Fitting',
  '12‑Month Supply of Contact Lenses',
];
const PLAN_BUTTON_SELECT = 'Select';
const PLAN_12_MONTHS = 'for 12 months';
const PLAN_PER_MONTH = '/mo';
const PLAN_CURRENCY = '$';
const PLAN_OPTION_TITLE_MONTHLY = '2‑Week or\n1‑Month Contacts';
const PLAN_OPTION_TITLE_DAILY = '1‑Day\nContacts';
// Profile page copy
const PROFILE_HEADING = 'Create your Profile';
const PROFILE_INTRO = `This is where we'll send your contacts.`;
const PROFILE_HEADING_MEMBER = 'Member Details';
const PROFILE_HEADING_SHIPPING = 'Shipping';
// Payment page copy
const BILLING_DETAILS_HEADING = 'Add Payment Method';
const BILLING_DETAILS_INTRO = 'This is the card we will bill each month.';
const BILLING_HEADER_CREATE_PASSWORD = 'Create Password';
const BILLING_PASSWORD_RULES =
  'Your password must include at least 8 characters, an uppercase letter, and a number.';
const BILLING_HEADER_BILLING_INFO = 'Billing Information';
const BILLING_TERMS_OF_CONTRACT = `I acknowledge that I am signing up for a 12‑month membership with
monthly recurring auto‑payments of $<cost>, for a total cost of
$<totalCost>. The first payment of $<cost> will be charged when
I click the button below.`;
const ORDER_SUMMARY_TITLE = 'Order Summary';
const ORDER_SUMMARY_SUBHEAD_MONTHLY = '2‑WEEK OR 1‑MONTH CONTACTS';
const ORDER_SUMMARY_SUBHEAD_DAILY = '1‑DAY CONTACTS';
const ORDER_SUMMARY_LIST_EYE_EXAM = 'Comprehensive Eye Exam';
const ORDER_SUMMARY_LIST_LENS_FITTING = 'Contact Lens Fitting';
const ORDER_SUMMARY_LIST_12_MONTH_SUPPLY = '12‑Month Supply of Contact Lenses';
const ORDER_SUMMARY_MONTHLY_PAYMENTS = '12 Monthly Payments of';
const ORDER_SUMMARY_SHIPPING = 'Shipping';
const ORDER_SUMMARY_YEARLY_COMMITMENT = 'Total Yearly Commitment';
const ORDER_SUMMARY_PAYMENT_NUMBER = 'Payment 1 of 12';
const ORDER_SUMMARY_DUE_TODAY = 'Due Today';
// Forgot password page copy
const FORGOT_PASSWORD_HEADING = 'Reset Password';
const FORGOT_PASSWORD_INTRO =
  "Enter the email you use for Sightbox, and we'll send you an email with instructions to reset your password.";
const FORGOT_PASSWORD_NEW_TO_SIGHTBOX = 'New to Sightbox?';
const FORGOT_PASSWORD_SIGNUP_LINK_TEXT = 'Signup';

// MESSAGES
// Profile page Messages
const MSG_REQ_FIRST_NAME = 'First name is required.';
const MSG_REQ_LAST_NAME = 'Last name is required.';
const MSG_INVALID_EMAIL = 'Please enter a valid email.';
const MSG_REQ_EMAIL = 'Email is required.';
const MSG_INVALID_MOBILE_PHONE = 'Please enter a valid phone number.';
const MSG_REQ_MOBILE_PHONE = 'Mobile phone is required.';
const MSG_REQ_DOB = 'Date of birth is required.';
const MSG_INVALID_DOB = 'Please enter a valid date of birth.';
const MSG_REQ_SEX = 'Required.';
const MSG_REQ_SHIPPING_ADDRESS = 'Shipping address is required.';
const MSG_REQ_BILLING_ADDRESS = 'Billing address is required.';
const MSG_REQ_ZIP_CODE = 'Zip code is required.';
const MSG_INVALID_ZIP_CODE = 'Please enter a valid zip code.';
const MSG_REQ_CITY = 'City is required.';
const MSG_REQ_STATE = 'State is required.';
const MSG_INVALID_ACCEPT_TOS = 'You must agree to the Terms of Service.';
const MSG_SUBMIT_ERROR = 'Please review the errors indicated above.';
const MSG_DUPLICATE_EMAIL =
  'An account with this email address already exists.';
const MSG_DUPLICATE_MOBILE_DOB =
  'An account with this mobile number and birthdate already exists.';
const MSG_DUPLICATE_NAME_ADDRESS =
  'An account with this name and address already exists.';
const MSG_DUPLICATE_NAME_DOB =
  'An account with this name and birthdate already exists.';
const MSG_DUPLICATE_NAME_MOBILE =
  'An account with this name and mobile number already exists.';
const MSG_DUPLICATE_NAME_MOBILE_DOB =
  'An account with this name, mobile number and birthdate already exists.';
const MSG_UNEXPECTED_ERROR =
  'Oh Snap! An unexpected error occurred please contact support';
const MSG_SYSTEM_ERROR_PREFIX = 'System Error:';
const MSG_UNKNOWN_TYPE_CREATE_LEAD =
  'Unknown Type Name returned from CreateLead';
const MSG_DUP_ACCOUNT_LOGIN_RESET_PW = (
  <span>
    Please{' '}
    <a href={URL_LOGIN} target={URL_TARGET}>
      Log In
    </a>{' '}
    or{' '}
    <a href={URL_RESET_PW} target={URL_TARGET}>
      Reset Password
    </a>
    .
  </span>
);
const MSG_DUP_ACCOUNT_CONTACT_SUPPORT = (
  <span>
    Please contact <a href={URL_EMAIL_SUPPORT}>Sightbox Support</a>.
  </span>
);
// Payment page messages
const MSG_REQ_CREDIT_CARD = 'Credit Card is required.';
const MSG_INVALID_CREDIT_CARD = 'Credit Card number is invalid.';
const MSG_REQ_CVV = 'CVV is required.';
const MSG_INVALID_CVV = 'CVV is invalid.';
const MSG_REQ_EXPIRATION = 'Expiration is required.';
const MSG_INVALID_EXPIRATION = 'Expiration is invalid.';
const MSG_REQ_AGREE_TOM = 'You must agree to the terms of Membership.';
const MSG_REQ_NAME_ON_CARD = 'Name on Card is required.';
// Forgot password page messages
const MSG_FORGOT_PASSWORD_INVALID_EMAIL = 'Please enter a valid email.';
const MSG_FORGOT_PASSWORD_REQ_EMAIL = 'Email is required.';
const MSG_FORGOT_PASSWORD_EMAIL_SENT =
  'An email with password reset instructions has been sent to the email on file. Please follow the instruction in the email.';
const MSG_FORGOT_PASSWORD_API_NO_USERNAME_PROVIDED = 'No username was provided';
const MSG_FORGOT_PASSWORD_API_TOO_MANY_RETRIES =
  'Retry limit exceeded, please try after some time.';
const MSG_FORGOT_PASSWORD_API_USER_NOT_FOUND =
  'The username was not found while attempting to reset their password.';
const MSG_FORGOT_PASSWORD_API_PASSWORD_RESET_LINK_EXPIRED =
  'Password reset link has expired. Please request a link again.';
const MSG_FORGOT_PASSWORD_API_GENERIC_MESSAGE =
  'An error occurred while processing your request.';
// Password validation messages
const MSG_REQ_PASSWORD = 'Password is required.';
const MSG_PASSWORD_STRENGTH_HEADER = 'Password must contain:';
const MSG_PASSWORD_STRENGTH_A = 'Minimum 8 characters';
const MSG_PASSWORD_STRENGTH_B = 'At least 1 uppercase letter and 1 number';
const MSG_PASSWORD_STRENGTH_C = 'Only include these symbols:';
const MSG_REQ_CONFIRM_PASSWORD = 'Passwords must match';

// FIELDS AND LABELS
// Profile page fields and labels
const FLD_PLH_FIRST_NAME = 'Jennifer';
const FLD_LBL_FIRST_NAME = 'First Name*';
const FLD_PLH_MIDDLE_NAME = 'M.I.';
const FLD_LBL_MIDDLE_NAME = 'Middle Initial';
const FLD_PLH_LAST_NAME = 'Doe';
const FLD_LBL_LAST_NAME = 'Last Name*';
const FLD_PLH_EMAIL = 'eg. icansee@sightbox.com';
const FLD_LBL_EMAIL = 'Email Address*';
const FLD_PLH_MOBILE_PHONE = '555-555-5555';
const FLD_LBL_MOBILE_PHONE = 'Mobile*';
const FLD_PLH_DATE_OF_BIRTH = 'mm/dd/yyyy';
const FLD_LBL_DATE_OF_BIRTH = 'DOB*';
const FLD_LBL_SEX = 'Sex*';
const FLD_PLH_SHIPPING_ADDRESS = '1234 Washington Lane (No PO Boxes)';
const FLD_LBL_SHIPPING_ADDRESS = 'Street Address*';
const FLD_PLH_SHIPPING_ADDRESS_2 = 'Apt, Floor, Suite #';
const FLD_LBL_SHIPPING_ADDRESS_2 = 'Apt/Floor/Suite';
const FLD_PLH_SHIPPING_ZIP_CODE = '12345';
const FLD_LBL_SHIPPING_ZIP_CODE = 'Zip Code*';
const FLD_PLH_SHIPPING_CITY = 'Portland';
const FLD_LBL_SHIPPING_CITY = 'City*';
const FLD_LBL_SHIPPING_STATE = 'State*';
const FLD_PLH_BILLING_ADDRESS = '1234 Washington Lane';
const FLD_LBL_BILLING_ADDRESS = 'Street Address*';
const FLD_PLH_BILLING_ADDRESS_2 = 'Apt, Floor, Suite #';
const FLD_LBL_BILLING_ADDRESS_2 = 'Apt/Floor/Suite';
const FLD_PLH_BILLING_ZIP_CODE = '12345';
const FLD_LBL_BILLING_ZIP_CODE = 'Zip Code*';
const FLD_PLH_BILLING_CITY = 'Portland';
const FLD_LBL_BILLING_CITY = 'City*';
const FLD_LBL_BILLING_STATE = 'State*';
const FLD_LBL_TERMS_OF_SERVICE = (
  <span>
    I agree to the{' '}
    <a href={URL_TOS} target={URL_TARGET}>
      Terms of Service
    </a>
    , including the auto‑payment terms, and have read our{' '}
    <a href={URL_PRIVACY_POLICY} target={URL_TARGET}>
      Privacy Policy
    </a>
    .
  </span>
);
const FLD_LBL_RECEIVE_TEXT_MESSAGES =
  'I would like to receive text messages about my eye exam and shipment status.';
const FLD_LBL_SUBMIT_BUTTON_NEXT = 'Next';
const FLD_LBL_SUBMIT_BUTTON_CONTINUE = 'Continue';
// Payment page fields and labels
const FLD_PLH_PASSWORD = 'Minimum 8 characters';
const FLD_LBL_PASSWORD = 'Password*';
const FLD_PLH_CONFIRM_PASSWORD = 'Re-type password';
const FLD_LBL_CONFIRM_PASSWORD = 'Confirm Password*';
const FLD_LBL_CARD_NUMBER = 'Card Number*';
const FLD_PLH_CARD_NUMBER = '0000 0000 0000 0000';
const FLD_PLH_NAME_ON_CARD = 'Jennifer Doe';
const FLD_LBL_NAME_ON_CARD = 'Name on Card*';
const FLD_PLH_CARD_EXPIRATION = 'MM/YY';
const FLD_LBL_CARD_EXPIRATION = 'expiration*';
const FLD_PLH_CARD_CVV = '321';
const FLD_LBL_CARD_CVV = 'cvv*';
const FLD_LBL_CARD_ZIP = 'zip code*';
const FLD_LBL_TERMS_OF_CONTRACT = 'I Accept';
const FLD_LBL_SUBMIT_BUTTON_SIGN_ME_UP = 'Sign Me Up';
// Forgot password page fields and labels
const FLD_PLH_FORGOT_PASSWORD_EMAIL = 'eg. icansee@sightbox.com';
const FLD_LBL_FORGOT_PASSWORD_EMAIL = 'Sightbox Email';
const FLD_LBL_FORGOT_PASSWORD_SUBMIT = 'Reset my password';
// Reset password page fields and labels
const FLD_PLH_RESET_PASSWORD_PASSWORD = '* password';
const FLD_LBL_RESET_PASSWORD_PASSWORD = 'Reset Password';
const FLD_PLH_RESET_PASSWORD_CONFIRM_PASSWORD = '* confirm password';
const FLD_LBL_RESET_PASSWORD_RESET_PASSWORD = 'Reset Password';

const copy = {
  PLAN_HEADING,
  PLAN_INTRO,
  PLAN_FEATURES_HEADING,
  PLAN_FEATURE_LIST,
  PLAN_BUTTON_SELECT,
  PLAN_12_MONTHS,
  PLAN_PER_MONTH,
  PLAN_CURRENCY,
  PLAN_OPTION_TITLE_MONTHLY,
  PLAN_OPTION_TITLE_DAILY,
  PROFILE_HEADING,
  PROFILE_INTRO,
  PROFILE_HEADING_MEMBER,
  PROFILE_HEADING_SHIPPING,
  BILLING_DETAILS_HEADING,
  BILLING_DETAILS_INTRO,
  BILLING_HEADER_CREATE_PASSWORD,
  BILLING_PASSWORD_RULES,
  BILLING_HEADER_BILLING_INFO,
  BILLING_TERMS_OF_CONTRACT,
  ORDER_SUMMARY_TITLE,
  ORDER_SUMMARY_SUBHEAD_MONTHLY,
  ORDER_SUMMARY_SUBHEAD_DAILY,
  ORDER_SUMMARY_LIST_EYE_EXAM,
  ORDER_SUMMARY_LIST_LENS_FITTING,
  ORDER_SUMMARY_LIST_12_MONTH_SUPPLY,
  ORDER_SUMMARY_MONTHLY_PAYMENTS,
  ORDER_SUMMARY_SHIPPING,
  ORDER_SUMMARY_YEARLY_COMMITMENT,
  ORDER_SUMMARY_PAYMENT_NUMBER,
  ORDER_SUMMARY_DUE_TODAY,
  FORGOT_PASSWORD_HEADING,
  FORGOT_PASSWORD_INTRO,
  FORGOT_PASSWORD_NEW_TO_SIGHTBOX,
  FORGOT_PASSWORD_SIGNUP_LINK_TEXT,
};

const messages = {
  MSG_REQ_FIRST_NAME,
  MSG_REQ_LAST_NAME,
  MSG_INVALID_EMAIL,
  MSG_REQ_EMAIL,
  MSG_REQ_MOBILE_PHONE,
  MSG_INVALID_MOBILE_PHONE,
  MSG_REQ_DOB,
  MSG_INVALID_DOB,
  MSG_REQ_SEX,
  MSG_REQ_SHIPPING_ADDRESS,
  MSG_REQ_BILLING_ADDRESS,
  MSG_REQ_ZIP_CODE,
  MSG_INVALID_ZIP_CODE,
  MSG_REQ_CITY,
  MSG_REQ_STATE,
  MSG_INVALID_ACCEPT_TOS,
  MSG_SUBMIT_ERROR,
  MSG_DUPLICATE_EMAIL,
  MSG_DUPLICATE_MOBILE_DOB,
  MSG_DUPLICATE_NAME_ADDRESS,
  MSG_DUPLICATE_NAME_DOB,
  MSG_DUPLICATE_NAME_MOBILE,
  MSG_DUPLICATE_NAME_MOBILE_DOB,
  MSG_UNEXPECTED_ERROR,
  MSG_SYSTEM_ERROR_PREFIX,
  MSG_UNKNOWN_TYPE_CREATE_LEAD,
  MSG_DUP_ACCOUNT_LOGIN_RESET_PW,
  MSG_DUP_ACCOUNT_CONTACT_SUPPORT,
  MSG_REQ_CREDIT_CARD,
  MSG_INVALID_CREDIT_CARD,
  MSG_REQ_CVV,
  MSG_INVALID_CVV,
  MSG_REQ_EXPIRATION,
  MSG_INVALID_EXPIRATION,
  MSG_REQ_PASSWORD,
  MSG_PASSWORD_STRENGTH_HEADER,
  MSG_PASSWORD_STRENGTH_A,
  MSG_PASSWORD_STRENGTH_B,
  MSG_PASSWORD_STRENGTH_C,
  MSG_REQ_CONFIRM_PASSWORD,
  MSG_REQ_AGREE_TOM,
  MSG_REQ_NAME_ON_CARD,
  MSG_FORGOT_PASSWORD_INVALID_EMAIL,
  MSG_FORGOT_PASSWORD_REQ_EMAIL,
  MSG_FORGOT_PASSWORD_EMAIL_SENT,
  MSG_FORGOT_PASSWORD_API_NO_USERNAME_PROVIDED,
  MSG_FORGOT_PASSWORD_API_TOO_MANY_RETRIES,
  MSG_FORGOT_PASSWORD_API_USER_NOT_FOUND,
  MSG_FORGOT_PASSWORD_API_PASSWORD_RESET_LINK_EXPIRED,
  MSG_FORGOT_PASSWORD_API_GENERIC_MESSAGE,
};

const fields = {
  FLD_PLH_FIRST_NAME,
  FLD_LBL_FIRST_NAME,
  FLD_PLH_MIDDLE_NAME,
  FLD_LBL_MIDDLE_NAME,
  FLD_PLH_LAST_NAME,
  FLD_LBL_LAST_NAME,
  FLD_PLH_EMAIL,
  FLD_LBL_EMAIL,
  FLD_PLH_MOBILE_PHONE,
  FLD_LBL_MOBILE_PHONE,
  FLD_PLH_DATE_OF_BIRTH,
  FLD_LBL_DATE_OF_BIRTH,
  FLD_LBL_SEX,
  FLD_PLH_SHIPPING_ADDRESS,
  FLD_LBL_SHIPPING_ADDRESS,
  FLD_PLH_SHIPPING_ADDRESS_2,
  FLD_LBL_SHIPPING_ADDRESS_2,
  FLD_PLH_SHIPPING_ZIP_CODE,
  FLD_LBL_SHIPPING_ZIP_CODE,
  FLD_PLH_SHIPPING_CITY,
  FLD_LBL_SHIPPING_CITY,
  FLD_LBL_SHIPPING_STATE,
  FLD_PLH_BILLING_ADDRESS,
  FLD_LBL_BILLING_ADDRESS,
  FLD_PLH_BILLING_ADDRESS_2,
  FLD_LBL_BILLING_ADDRESS_2,
  FLD_PLH_BILLING_ZIP_CODE,
  FLD_LBL_BILLING_ZIP_CODE,
  FLD_PLH_BILLING_CITY,
  FLD_LBL_BILLING_CITY,
  FLD_LBL_BILLING_STATE,
  FLD_LBL_TERMS_OF_SERVICE,
  FLD_LBL_RECEIVE_TEXT_MESSAGES,
  FLD_LBL_SUBMIT_BUTTON_NEXT,
  FLD_LBL_SUBMIT_BUTTON_CONTINUE,
  FLD_LBL_SUBMIT_BUTTON_SIGN_ME_UP,
  FLD_PLH_PASSWORD,
  FLD_LBL_PASSWORD,
  FLD_PLH_CONFIRM_PASSWORD,
  FLD_LBL_CONFIRM_PASSWORD,
  FLD_LBL_CARD_NUMBER,
  FLD_PLH_CARD_NUMBER,
  FLD_PLH_NAME_ON_CARD,
  FLD_LBL_NAME_ON_CARD,
  FLD_PLH_CARD_EXPIRATION,
  FLD_LBL_CARD_EXPIRATION,
  FLD_PLH_CARD_CVV,
  FLD_LBL_CARD_CVV,
  FLD_LBL_CARD_ZIP,
  FLD_LBL_TERMS_OF_CONTRACT,
  FLD_PLH_FORGOT_PASSWORD_EMAIL,
  FLD_LBL_FORGOT_PASSWORD_EMAIL,
  FLD_LBL_FORGOT_PASSWORD_SUBMIT,
  FLD_PLH_RESET_PASSWORD_PASSWORD,
  FLD_LBL_RESET_PASSWORD_PASSWORD,
  FLD_PLH_RESET_PASSWORD_CONFIRM_PASSWORD,
  FLD_LBL_RESET_PASSWORD_RESET_PASSWORD,
};

export { copy, messages, fields };
