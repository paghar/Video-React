//@flow
import React from 'react';
import {
  StyledDiv,
  UserNameLabel,
  TimeLabel,
  TextLabel,
  StyledActivityDiv,
} from './index.style';
import Avatar from 'components/shared/Avatar';
import { Display2, Display4, Display5 } from 'theme/fonts';
import { Generals } from 'theme/colors';
import { twoDigitMinutes } from 'helpers/time';

export type ActivityType = {
  avatarSrc: string,
  name: string,
  shortName: string,
  createdAt: number,
  text: string,
  avatarColor: string,
};
type Props = {
  className?: string,
};
const ActivityItem = ({
  avatarSrc,
  name,
  shortName,
  createdAt,
  text,
  avatarColor,
  className,
}: Props & ActivityType) => {
  return (
    <StyledDiv>
      <Avatar
        backgroundColor={avatarColor}
        imgUrl={avatarSrc}
        width="24px"
        height="24px"
        borderRadius="100%"
        font={Display4}
        color={Generals.viii}
      >
        {shortName}
      </Avatar>
      <StyledActivityDiv>
        <UserNameLabel font={Display2} color={Generals.vii}>
          {name}
        </UserNameLabel>
        <TextLabel font={Display4} color={Generals.vi}>
          {text}
        </TextLabel>
        <TimeLabel font={Display5} color={Generals.vi}>
          {`${twoDigitMinutes(createdAt) &&
            new Date(createdAt).getHours()}:${twoDigitMinutes(createdAt)}`}
        </TimeLabel>
      </StyledActivityDiv>
    </StyledDiv>
  );
};
export default ActivityItem;
