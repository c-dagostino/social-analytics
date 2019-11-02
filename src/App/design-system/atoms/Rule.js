import styled from 'styled-components';

const Rule = styled('hr')(props => ({
  fontSize: '0',
  height: props.height ? props.height : '2px',
  border: '0',
  maxWidth: props.maxWidth ? props.maxWidth : 'inherit',
  width: '100%',
  backgroundColor: props.color
    ? props.theme.colors[props.color]
    : props.theme.colors.gray1,
}));

export default Rule;
