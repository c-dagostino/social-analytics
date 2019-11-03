import styled from 'styled-components';
import { textStyle, fontSize, fontWeight } from 'styled-system';

const Headline = styled.h2(textStyle, fontSize, fontWeight);

Headline.defaultProps = {
  textStyle: ['heading3', 'heading2'],
};

Headline.h1 = Headline.withComponent('h1');
Headline.h2 = Headline.withComponent('h2');
Headline.h3 = Headline.withComponent('h3');
Headline.h4 = Headline.withComponent('h4');
Headline.h5 = Headline.withComponent('h5');
Headline.h6 = Headline.withComponent('h6');

export default Headline;
