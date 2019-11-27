import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PieChart from 'react-minimal-pie-chart';
import { Box } from '../../design-system/atoms';
import selectors from '../../containers/App/selectors';

const getSentimentFromTweets = tweets => {
  const data = [];

  data.push({
    title: 'Positive',
    color: '#44bc8f',
    value: tweets.filter(t => t.sentiment === 'POSITIVE').length,
  });
  data.push({
    title: 'Negative',
    color: '#c12533',
    value: tweets.filter(t => t.sentiment === 'NEGATIVE').length,
  });
  data.push({
    title: 'Neutral',
    color: '#dad94b',
    value: tweets.filter(t => t.sentiment === 'NEUTRAL').length,
  });

  return data;
};

const getLegend = data => {
  const cells = data.map(d => (
    <span style={{ fontSize: '80%', paddingLeft: '15px' }} key={d.title}>
      <span style={{ backgroundColor: d.color }}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span style={{ paddingLeft: '5px' }}>
        {d.title}
        {'('}
        {d.value}
        {')'}
      </span>
    </span>
  ));

  return <div>{cells}</div>;
};

const TweetsPieChart = ({ tweets }) => {
  if (tweets) {
    const data = getSentimentFromTweets(tweets);
    const legend = getLegend(data);
    return (
      <Box>
        <Box textAlign="center">
          <h1>Overall Sentiment</h1>
        </Box>
        <Box>
          <PieChart
            x={50}
            y={60}
            outerRadius={150}
            innerRadius={75}
            data={data}
            style={{
              height: '250px',
              width: '250px',
              marginLeft: '50px',
              marginTop: '25px',
            }}
          />
          <Box mt={[15, 15]}>{legend}</Box>
        </Box>
      </Box>
    );
  }

  return null;
};

const mapStateToProps = (state, ownProps) => {
  const selectTweets = selectors.makeSelectTweets();
  return {
    tweets: selectTweets(state, ownProps),
  };
};

TweetsPieChart.propTypes = {
  tweets: PropTypes.array,
};
TweetsPieChart.defaultProps = {
  tweets: null,
};

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(TweetsPieChart);
