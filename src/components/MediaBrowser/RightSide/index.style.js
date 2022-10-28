//@flow
import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { Generals, Primary } from 'theme/colors';
export const TabsWrapper = styled(Tabs)`
  background-color: ${Generals.iii};
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-right: 5px;
`;

export const StyledTabList = styled(TabList)`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  padding: 0px;
  margin: 0;
  align-content: center;
`;
export const TabName = styled(Tab)`
  align-content: center;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex: 1;
  border-bottom: 2px solid ${Generals.v};
  padding: 22px 0 18px 0;
  user-select: none;
  cursor: pointer;
  line-height: 2px;
  &.is-selected {
    border-bottom: 3px solid ${Primary.Dim};
    color: ${Generals.viii} !important;

    span {
      color: ${Generals.viii} !important;
    }
  }

  &:focus {
    outline: none;
    border-bottom: 3px solid #005dff;
    color: white !important;
    line-height: 3px;
    span {
      color: white !important;
    }
  }
`;
export const ContainerTabPanel = styled(TabPanel)`
  padding-top: 20px;
  display: none;
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
  &.is-selected {
    -webkit-flex: 1 1 auto;
    display: block;
  }
`;
