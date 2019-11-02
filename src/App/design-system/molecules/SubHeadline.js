import styled from 'styled-components';

const SubHeadline = styled.h4(props => ({
  color: props.theme.colors.blue1,
  textTransform: 'uppercase',
  fontSize: '15px',
  fontWeight: 800,
  letterSpacing: '1.5px',
}));

export default SubHeadline;
