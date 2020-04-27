import tweetActions from './tweets';
import appActions from './app';
import covidActions from './covid';

export default { ...appActions, ...tweetActions, ...covidActions };
