//@flow
import React from 'react';
import Activity from './Activity';
import type { ActivityType } from './Activity/ActivityItem';
import Details from './Details';
import Typography from 'components/shared/Typography';
import { Display1 } from 'theme/fonts';
import { Generals } from 'theme/colors';
import {
  TabsWrapper,
  StyledTabList,
  TabName,
  ContainerTabPanel,
} from './index.style';
type Props = {
  className?: string,
  activities: Array<ActivityType>,
};

const RightSide = ({ activities, className }: Props) => {
  return (
    <TabsWrapper
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
      className={className}
    >
      <StyledTabList>
        <TabName>
          <Typography font={Display1} color={Generals.vii}>
            Activity
          </Typography>
        </TabName>
        <TabName>
          <Typography font={Display1} color={Generals.vi}>
            Details
          </Typography>
        </TabName>
      </StyledTabList>
      <ContainerTabPanel>
        <Activity activities={activities} />
      </ContainerTabPanel>
      <ContainerTabPanel>
        <Details />
      </ContainerTabPanel>
    </TabsWrapper>
  );
};

export default RightSide;
