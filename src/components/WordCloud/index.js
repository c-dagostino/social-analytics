import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WordCloud from 'react-d3-cloud';
import { getWordCountFromTweets } from '../../containers/utils/wordCounter';
import selectors from '../../containers/App/selectors';

const WordCloudComponent = ({ tweets }) => {
  const fontSizeMapper = word => Math.log2(word.value) * 10;

  const rotate = word => word.value % 360;

  if (tweets) {
    const wordCounts = getWordCountFromTweets(tweets.slice(0, 50));
    return (
      <div>
        <h1>Word Cloud</h1>
        <div style={{ marginTop: '-100px' }}>
          <WordCloud
            data={wordCounts}
            fontSizeMapper={fontSizeMapper}
            rotate={rotate}
          />
        </div>
      </div>
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
