//@flow
import styled from 'styled-components';
import { Generals } from 'theme/colors';
import { hexToRgb } from 'helpers';
import Typography from 'components/shared/Typography';

export const LabelWrapper = styled.div`
  height: 27px;
  background-color: ${({ ...props }) => hexToRgb(Generals.ii(props), 0.7)};
  border-radius: 5px;
  text-align: center;
  padding-left: ${({ haveColor }) => (haveColor ? '19' : '8')}px;
  padding-top: 3px;
  padding-right: ${({ haveColor }) => (haveColor ? '10' : '7')}px;
`;

export const LabelCaption = styled(Typography)`
  &:before {
    ${({ labelColor }) =>
      labelColor
        ? `
    content: ' ';
    width: 7px;
    height: 7px;
    background-color: ${labelColor};
    border-radius: 100%;
    position: absolute;
    top: 10px
    left: 8px;
    `
        : ''}
  }
`;
