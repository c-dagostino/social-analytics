import React from 'react';
import { string, shape, func } from 'prop-types';
import { Auth } from 'aws-amplify';
import SignInForm from './formWrapper'; 
import {connect, useDispatch } from 'react-redux'
import Logger from '../../components/logging';
import * as actions from '../App/actions'
import * as selectors from '../App/selectors';
const logger = new Logger({ logName: 'social-analysis' });


const SignIn = ({error, location, history}) => {
      const dispatch = useDispatch();

      const getReferrer = () => {
        if (location && location.state && location.state.referrer) {
          const { referrer } = location.state;
          return referrer;
        }
    
        return '/';
      }
   
      const onSignIn = async (values) => {
            const { email, password } = values;
            const validationData = null;
            await Auth.signIn({  
                username: email, // Required, the username
                password, // Optional, the password
                validationData // Optional, a random key-value pair map which can contain any key and will be passed to your PreAuthentication Lambda trigger as-is. It can be used to implement additional validations around authentication
              })
                .then((user) => {
                  logger.log(`successfully signed in: ${JSON.stringify(user)}`);
                  history.push(getReferrer());
                })
                .catch(err => {
                  dispatch(actions.setError(err.message));
                  logger.log(`${email} failed login error: ${JSON.stringify(err)}`);
                })
      };

      return (
          <SignInForm onSubmit={onSignIn} error={error} />
      )
}

function mapStateToProps(state, ownProps) {
    const selectError = selectors.makeSelectError();
    return { error: selectError(state, ownProps) }
  }
  const propTypes = {
    error: string,
    location: shape({
        state: shape({
          referrer: string
        })
      }),
      history: shape({
        push: func,
      }),
  };
  
  const defaultProps = {
    error: null,
    location: {
        state: {
          referrer: '/'
        }
      },
      history: null,
  };
  

SignInForm.propTypes = propTypes;
SignInForm.defaultProps = defaultProps;

export default connect(mapStateToProps)(SignIn);