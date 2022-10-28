import styled from 'styled-components';

export const IconSpan = styled.span`
  font-family: 'FontAwesome' !important;
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ iconColor }) => iconColor};
  margin: 0px;
  padding: 0px;
  align-self: center;
  ${({ selectable }) =>
    !selectable &&
    `
         -moz-user-select: none;
         -khtml-user-select: none;
         -webkit-user-select: none;
         -ms-user-select: none;
         user-select: none;
        `}
  :hover {
    color: ${({ hoverColor }) => hoverColor};
  }
`;
