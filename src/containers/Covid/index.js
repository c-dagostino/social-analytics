import React, { useEffect } from 'react';
import { bindActionCreators, compose } from 'redux';
import { array, bool, string, object, number } from 'prop-types';
import { connect } from 'react-redux';
import dateFormat from 'dateformat';
import CovidStateGrid from './covidStateGrid';
import { Box } from '../../design-system/atoms';
import appActions from '../App/actions';
import selectors from '../App/selectors';
import LoadingIndicator from '../../components/LoadingIndicator/index';

const filterOutTodaysdata = (data, dateId) => {
  const rtnData = data
    .filter(r => r.date_id === dateId)
    .sort((a, b) => b.total_cases - a.total_cases);
  return rtnData;
};

const CovidPage = ({ data, dateId, loading, error, actions }) => {
  useEffect(() => {
    const currentDateId = Number.parseInt(
      dateFormat(new Date(), 'yyyymmdd'),
      0,
    );
    if (dateId !== currentDateId && !loading) {
      actions.fetchCovidData(currentDateId);
    }
  });

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
        <CovidStateGrid data={data} error={error} loading={loading} />
      </Box>
      {loadingIndicator}
    </Box>
  );
};
const mapStateToProps = (state, ownProps) => {
  const selectData = selectors.makeSelectAllCovidData();
  const selectDataLoading = selectors.makeSelectCovidDataLoading();
  const selectDataError = selectors.makeSelectCovidDataError();
  const selectDateId = selectors.makeSelectCovidDateId();
  const dateId = selectDateId(state, ownProps);
  return {
    data: filterOutTodaysdata(selectData(state, ownProps), dateId),
    loading: selectDataLoading(state, ownProps),
    error: selectDataError(state, ownProps),
    dateId,
  };
};

export const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(appActions, dispatch),
});

const propTypes = {
  data: array,
  loading: bool,
  error: string,
  dateId: number,
  actions: object,
};

const defaultProps = {
  data: undefined,
  loading: false,
  dateId: null,
  error: '',
};

CovidPage.propTypes = propTypes;
CovidPage.defaultProps = defaultProps;

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(CovidPage);
