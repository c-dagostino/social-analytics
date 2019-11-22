import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PieChart from 'react-minimal-pie-chart';
import selectors from '../../containers/App/selectors';

const getSentimentFromTweets = tweets => {
  const data = [];

  data.push({
    title: 'Positive',
    color: '#44bc8f',
    value: tweets.filter(t => t.sentiment === 'POSITIVE').length,
  });
  data.push({
    title: 'Neutral',
    color: '#c12533',
    value: tweets.filter(t => t.sentiment === 'NEUTRAL').length,
  });
  data.push({
    title: 'Negative',
    color: '#dad94b',
    value: tweets.filter(t => t.sentiment === 'NEGATIVE').length,
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
      <div>
        <h1>Sentiment</h1>
        <PieChart
          x={50}
          y={60}
          outerRadius={100}
          innerRadius={50}
          data={data}
          style={{ height: '250px', width: '250px' }}
        />
        <div style={{ paddingTop: '15px' }}>{legend}</div>
      </div>
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
