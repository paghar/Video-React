//@flow
import styled from 'styled-components';
import Icon from 'components/shared/Icon';
export const StyledIcon = styled(Icon)`
  font-size: ${({ fontSize }) => fontSize};
  display: ${({ fontSize }) => (fontSize ? 'block' : 'none')};
  color: ${({ color }) => color};
  padding-right: ${({ spacing, rtl }) => (rtl ? '0px' : spacing)};
  padding-left: ${({ spacing, rtl }) => (rtl ? spacing : '0px')};
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const StyledButton = styled.button`
  direction: ${({ rtl }) => (rtl ? 'rtl' : 'ltr')};
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ radius }) => radius};
  :hover {
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor};
    span {
      color: ${({ hoverColor }) => hoverColor};
    }
    ${({ hoverIconColor }) =>
      hoverIconColor
        ? `
    ${StyledIcon} {
      color: ${hoverIconColor};
    }
    `
        : ''}
  }
  :active {
    background-color: ${({ activeBackgroundColor }) => activeBackgroundColor};
  }
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
