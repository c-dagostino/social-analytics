import React from 'react';
import styled from 'styled-components';
import {
  layout,
  typography,
  color as Color,
  flexbox,
  grid,
  border as Border,
  background,
  position as Position,
  space,
  textStyle as TextStyle,
} from 'styled-system';

const max = props =>
  props.maxContentWidth
    ? {
        maxWidth: props.theme.maxContentWidth,
      }
    : null;

const Box = styled(
  ({
    width,
    height,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    size,
    verticalAlign,
    display,
    overflow,
    overflowX,
    overflowY,
    // typography
    fontSize,
    fontFamily,
    fontWeight,
    lineHeight,
    textAlign,
    fontStyle,
    letterSpacing,
    textStyle,
    // color
    color,
    bg,
    backgroundColor,
    opacity,
    // flexbox
    alignItems,
    alignContent,
    justifyItems,
    justifyContent,
    flexWrap,
    flexDirection,
    flex,
    flexGrow,
    flexShrink,
    flexBasis,
    justifySelf,
    alignSelf,
    order,
    // grid
    gridGap,
    gridColumnGap,
    gridRowGap,
    gridColumn,
    gridRow,
    gridAutoFlow,
    gridAutoColumns,
    gridAutoRows,
    gridTemplateColumns,
    gridTemplateRows,
    gridTemplateAreas,
    gridArea,
    // border
    border,
    borderWidth,
    borderStyle,
    borderColor,
    borderRadius,
    borderTop,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderRight,
    borderBottom,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderLeft,
    borderX,
    borderY,
    borderTopWidth,
    borderTopColor,
    borderTopStyle,
    borderBottomWidth,
    borderBottomColor,
    borderBottomStyle,
    borderLeftWidth,
    borderLeftColor,
    borderLeftStyle,
    borderRightWidth,
    borderRightColor,
    borderRightStyle,
    // position
    position,
    zIndex,
    top,
    right,
    bottom,
    left,
    // space
    m,
    margin,
    mt,
    marginTop,
    mr,
    marginRight,
    mb,
    marginBottom,
    ml,
    marginLeft,
    mx,
    marginX,
    my,
    marginY,
    p,
    padding,
    pt,
    paddingTop,
    pr,
    paddingRight,
    pb,
    paddingBottom,
    pl,
    paddingLeft,
    px,
    paddingX,
    py,
    paddingY,
    // custom
    maxContentWidth,
    ...other
  }) => <div {...other} />,
)`
${layout}
${typography}
${Color}
${flexbox}
${grid}
${Border}
${background}
${Position}
${space}
${max}
${TextStyle}
`;

export default Box;
