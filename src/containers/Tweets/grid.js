import React, { useEffect, useState } from 'react';
import { array } from 'prop-types';
import Griddle, { RowDefinition, ColumnDefinition } from 'griddle-react';
import '../../design-system/griddle.css';

const TweetsGrid = ({ tweets }) => {
  const pageSize = 10;

  const [tableData, setTableData] = useState({
    data: [],
    tweets: [],
    currentPage: 1,
    recordCount: 0,
  });

  const updateTableState = (data, currentPage) => {
    const slicedData = [...data].slice(
      (currentPage - 1) * pageSize,
      pageSize * currentPage,
    );
    setTableData({
      data: slicedData,
      currentPage,
      recordCount: data.length,
      tweets: data,
    });
  };

  useEffect(() => {
    if (tweets !== tableData.tweets) {
      updateTableState(tweets, tableData.currentPage);
    }
  });

  const onNext = () => {
    this.updateTableState(tableData.tweets, tableData.currentPage + 1);
  };

  const onPrevious = () => {
    this.updateTableState(tableData.tweets, tableData.currentPage - 1);
  };

  const onGetPage = pageNumber => {
    this.updateTableState(tableData.tweets, pageNumber);
  };

  return (
    <Griddle
      data={tableData.data}
      pageProperties={{
        currentPage: tableData.currentPage,
        pageSize,
        recordCount: tableData.recordCount,
      }}
      events={{
        onNext,
        onPrevious,
        onGetPage,
      }}
    >
      <RowDefinition>
        <ColumnDefinition id="username" title="Username" />
        <ColumnDefinition id="sentiment" title="Sentiment" />
        <ColumnDefinition id="fullText" title="Text" />
      </RowDefinition>
    </Griddle>
  );
};

const propTypes = {
  tweets: array,
};

const defaultProps = {
  tweets: [],
};

TweetsGrid.propTypes = propTypes;
TweetsGrid.defaultProps = defaultProps;

export default TweetsGrid;
