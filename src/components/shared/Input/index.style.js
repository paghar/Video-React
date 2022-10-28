//@flow
import styled from 'styled-components';
import Icon from 'components/shared/Icon';
export const StyledInput = styled.input`
  outline: none;
  border: none;
  background: none;
  width: 100%;
  color: ${({ textColor }) => textColor};
  flex-grow: 1;
  ::placeholder {
    color: ${({ placeHolderColor }) => placeHolderColor};
  }
  :-ms-input-placeholder {
    color: ${({ placeHolderColor }) => placeHolderColor};
  }
  ::-moz-input-placeholder {
    color: ${({ placeHolderColor }) => placeHolderColor};
  }
  :hover {
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor};
  }
`;
export const StyledSpan = styled(Icon)`
  padding-right: ${({ rtl, paddingRL }) => (rtl ? paddingRL : '0px')};
  padding-left: ${({ rtl, paddingRL }) => (rtl ? '0px' : paddingRL)};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  align-self: center;
`;
export const StyledDiv = styled.div`
  box-sizing: border-box;
  align-content: stretch;
  direction: ${({ rtl }) => (rtl ? 'rtl' : 'ltr')};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-family: ${({ fontName }) => fontName};
  font-size: ${({ sizing }) => sizing};
  font-weight: ${({ weight }) => weight};
  line-height: ${({ lineHeight }) => lineHeight};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding-right: ${({ paddingRL }) => paddingRL};
  padding-left: ${({ paddingRL }) => paddingRL};
  display: flex;
`;
