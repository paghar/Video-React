//@flow
import styled from 'styled-components';
import { Generals } from 'theme/colors';
import RightSide from 'components/MediaBrowser/RightSide';
import Header from 'components/MediaBrowser/Header';
import CardsHolder from 'components/MediaBrowser/CardsHolder';
import Breadcrumb from 'components/shared/Breadcrumb';
import { MEDIA_BROWSER_RIGHT_SIDE_MENU_ANIMATION_DURATION } from 'constants/variables';

export const MediaBrowserWrapper = styled.div`
  background-color: ${Generals.ii};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: stretch;
`;

export const BarItems = styled.div`
  margin-top: 46px;
  padding-left: 30px;
  padding-right: 14px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledCardsHolder = styled(CardsHolder)`
  /* margin-top: 7px; */
  z-index: 8;
`;

export const MediaBrowserLeftContent = styled.div`
  flex: 1;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  /* padding-left: 26px;
  padding-right: 25px; */
`;

export const RightSideMenuWrapper = styled.div`
  width: ${({ isOpen }) => (isOpen ? '255px' : '0')};
  flex-grow: 0;
  flex-shrink: 0;
  transition: max-width ${MEDIA_BROWSER_RIGHT_SIDE_MENU_ANIMATION_DURATION}ms;
  position: relative;
  overflow: hidden;
  width: 255px;
  ${({ isOpen }) => (isOpen ? 'max-width: 255px;' : 'max-width: 0;')}
`;

export const RightSidePanel = styled(RightSide)`
  width: 255px;
  position: absolute;
  right: 0;
  top: 0;
  flex-grow: 0;
  flex-shrink: 0;
  z-index: 9;
`;

export const ProjectBreadcrumb = styled(Breadcrumb)`
  margin-top: 46px;

  align-self: flex-start;
`;

export const MediaBrowserHeader = styled(Header)`
  margin-top: 19px;
  padding-left: 30px;
  padding-right: 14px;
`;
