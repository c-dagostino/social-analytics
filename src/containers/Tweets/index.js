import React from 'react';
import { bindActionCreators, compose } from 'redux';
import { array, bool, string, object } from 'prop-types';
import { connect } from 'react-redux';
import SearchTweetsForm from './form';
import TweetsGrid from './grid';
import { Box } from '../../design-system/atoms';
import appActions from '../App/actions';
import selectors from '../App/selectors';
import LoadingIndicator from '../../components/LoadingIndicator/index';

const TweetsPage = ({ tweets, loading, error, actions }) => {
  // const [currentTweets, setCurrentTweets] = useState([]);

  // useEffect(() => {
  //   if (tweets !== currentTweets) {
  //     setCurrentTweets(tweets);
  //   }
  // }, [tweets, currentTweets]);

  const onSearchButtonClick = ({ searchTerm }) => {
    actions.fetchTweets(searchTerm);
  };

  let loadingIndicator = null;

  if (loading) {
    loadingIndicator = (
      <Box>
        <Box style={{ maxHeight: '50px', maxWidth: '50px' }}>
          <LoadingIndicator />
        </Box>
      </Box>
    );
  }

  return (
    <Box>
      <Box>
        <SearchTweetsForm
          error={error}
          onSubmit={onSearchButtonClick}
          isSubmitting={loading}
        />
      </Box>
      <Box>
        <TweetsGrid tweets={tweets} />
      </Box>
      {loadingIndicator}
    </Box>
  );
};
const mapStateToProps = (state, ownProps) => {
  const selectTweets = selectors.makeSelectTweets();
  const selectTweetsLoading = selectors.makeSelectTweetsLoading();
  const selectTweetsError = selectors.makeSelectTweetsError();
  return {
    tweets: selectTweets(state, ownProps),
    loading: selectTweetsLoading(state, ownProps),
    error: selectTweetsError(state, ownProps),
  };
};

export const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(appActions, dispatch),
});

const propTypes = {
  tweets: array,
  loading: bool,
  error: string,
  actions: object,
};

const defaultProps = {
  tweets: [],
  loading: false,
  error: '',
};

TweetsPage.propTypes = propTypes;
TweetsPage.defaultProps = defaultProps;

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(TweetsPage);
