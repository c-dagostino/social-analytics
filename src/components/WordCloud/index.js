import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WordCloud from 'react-d3-cloud';
import { getWordCountFromTweets } from '../../containers/utils/wordCounter';
import { Box } from '../../design-system/atoms';
import selectors from '../../containers/App/selectors';

const WordCloudComponent = ({ tweets }) => {
  const fontSizeMapper = word => Math.log2(word.value) * 10;

  const rotate = word => word.value % 360;

  if (tweets) {
    const wordCounts = getWordCountFromTweets(tweets.slice(0, 50));
    return (
      <Box>
        <Box textAlign="center">
          <h1>Word Cloud</h1>
        </Box>
        <Box mt={[-50, -50]}>
          <WordCloud
            data={wordCounts}
            fontSizeMapper={fontSizeMapper}
            rotate={rotate}
          />
        </Box>
      </Box>
    );
  }

  return null;
};

WordCloudComponent.propTypes = {
  tweets: PropTypes.array,
};

WordCloudComponent.defaultProps = {
  tweets: null,
};

const mapStateToProps = (state, ownProps) => {
  const selectTweets = selectors.makeSelectTweets();
  return {
    tweets: selectTweets(state, ownProps),
  };
};

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(WordCloudComponent);
