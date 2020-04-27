import React, { useEffect, useState } from 'react';
import { array, bool, string, object } from 'prop-types';
import ReactDataGrid from 'react-data-grid';
import '../../design-system/react-grid.css';
import { Box, Error } from '../../design-system/atoms';
import LoadingIndicator from '../../components/LoadingIndicator/index';

const CovidStateGrid = ({ data, error, loading }) => {
  const [tableData, setTableData] = useState({
    data: [],
    sortColumn: 'total_cases',
    sortDirection: 'Desc',
  });

  const showError = e => (
    <Box mt="20px" display="flex" justifyContent="center">
      <Error fontSize="16px" lineHeight="22px" key={error}>
        {e}
      </Error>
    </Box>
  );

  const updateTableState = updatedData => {
    setTableData({
      data: updatedData,
    });
  };

  useEffect(() => {
    if (data.length !== tableData.data.length && !loading) {
      updateTableState([...data]);
    }
  });

  const defaultColumnProperties = {
    sortable: true,
  };
  const sortRows = (initialRows, sortColumn, sortDirection) => {
    let updatedData = [];
    if (sortDirection === 'DESC') {
      updatedData = [
        ...initialRows.sort((a, b) => {
          return b[sortColumn] > a[sortColumn] ? 1 : -1;
        }),
      ];
    } else if (sortDirection === 'ASC') {
      updatedData = [
        ...initialRows.sort((a, b) => {
          return a[sortColumn] > b[sortColumn] ? 1 : -1;
        }),
      ];
    }
    setTableData({
      data: updatedData,
      sortColumn,
      sortDirection,
    });
  };

  const columns = [
    { key: 'state_name', name: 'State', editable: true },
    {
      key: 'total_cases',
      name: 'Total Cases',
      editable: false,
    },
    { key: 'new_cases', name: 'New Cases', editable: false },
    { key: 'total_deaths', name: 'Total Cases', editable: false },
    { key: 'active_cases', name: 'Active Cases', editable: false },
  ].map(c => ({ ...c, ...defaultColumnProperties }));

  if (error) {
    return showError(error);
  }
  const formatNumber = val => ({
      return 
  })
  if (loading) {
    return (
      <Box>
        <Box style={{ maxHeight: '50px', maxWidth: '50px' }}>
          <LoadingIndicator />
        </Box>
      </Box>
    );
  }
  if (tableData.data && tableData.data.length > 0) {
    return (
      <ReactDataGrid
        rows={tableData.data}
        columns={columns}
        sortColumn={tableData.sortColumn}
        sortDirection={tableData.sortDirection}
        onSort={(sortColumn, sortDirection) =>
          sortRows(tableData.data, sortColumn, sortDirection)
        }
      />
    );
  }

  return null;
};

const propTypes = {
  data: array,
  loading: false,
  error: '',
};

const defaultProps = {
  data: undefined,
  loading: bool,
  error: string,
  actions: object,
};

CovidStateGrid.propTypes = propTypes;
CovidStateGrid.defaultProps = defaultProps;

export default CovidStateGrid;
