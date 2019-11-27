import React from 'react';
import TweetsPage from '../Tweets';
import { Box } from '../../design-system/atoms';
import WordCloudComponent from '../../components/WordCloud/index';
import PieChart from '../../components/PieChart';

const Dashboard = () => {
  return (
    <Box mx={[20, 20]}>
      <Box>
        <TweetsPage />
      </Box>
      <Box display="flex" flexWrap="wrap" alignItems="baseline">
        <Box display="flex" flexWrap="wrap" flex={['30%', '20%']}>
          <PieChart />
        </Box>
        <Box display="flex" flexWrap="wrap" flex={['30%', '20%']}>
          <WordCloudComponent />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
