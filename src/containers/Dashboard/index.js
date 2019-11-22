import React from 'react';
import TweetsPage from '../Tweets';
import WordCloudComponent from '../../components/WordCloud/index';
import PieChart from '../../components/PieChart';

const Dashboard = () => {
  return (
    <table>
      <tbody>
        <tr>
          <td style={{ verticalAlign: 'top' }} colSpan={2}>
            <TweetsPage />
          </td>
        </tr>

        <tr>
          <td className={'tableTop'}>
            <PieChart />
          </td>

          <td>
            <WordCloudComponent />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Dashboard;
