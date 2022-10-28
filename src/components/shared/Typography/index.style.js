//@flow
import styled from 'styled-components';

export const Wrapper = styled.span`
  font-family: ${({ fontName }) => fontName};
  font-size: ${({ sizing }) => sizing};
  font-weight: ${({ weight }) => weight};
  line-height: ${({ lineHeight }) => lineHeight};
  color: ${({ textColor }) => textColor};
  pointer-events: ${({ hoverable }) => (hoverable ? 'none' : 'auto')};
  ${({ hoverable }) =>
    hoverable
      ? `
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;`
      : ''}
`;
