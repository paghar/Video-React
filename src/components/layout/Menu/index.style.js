//@flow
import styled from 'styled-components';
import { Generals } from 'theme/colors';
import UsedSpace from 'components/layout/Menu/UsedSpace';
import { Text as MenuItemText } from './Navigation/index.style';
import { LEFT_MENU_ANIMATION_DURATION } from 'constants/variables';

export const UsedSpacePart = styled(UsedSpace)`
  margin: 0px 0px 0px 23px;
`;

export const MenuContainer = styled.div`
  position: relative;
  transition: width ${LEFT_MENU_ANIMATION_DURATION}ms;
  ${({ isShrinked }) => (isShrinked ? `width: 55px; ` : `width: 208px;`)}
  ${MenuItemText} {
    ${({ isShrinked }) => (isShrinked ? `opacity: 0;` : `opacity: 1;`)}
    transition: opacity ${LEFT_MENU_ANIMATION_DURATION}ms;
  }
  overflow: hidden;
  height: 100vh;
  margin: 0px;
  background-color: ${Generals.iii};
  padding: 0px;
`;

export const MenuInnerContent = styled.div`
  width: 208px;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 0px;
`;

export const BottomContiner = styled.div`
  ${UsedSpacePart} {
    ${({ isShrinked }) => (isShrinked ? `display: none;` : ``)}
  }
`;
