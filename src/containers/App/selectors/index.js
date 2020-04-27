import tweetSelectors from './tweets';
import covidDataSelectors from './covid';
import appSelectors from './app';

export default { ...appSelectors, ...tweetSelectors, ...covidDataSelectors };
