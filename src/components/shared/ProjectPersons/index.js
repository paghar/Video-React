// @flow
import React from 'react';
import { Display3, Display2 } from 'theme/fonts';
import { Generals as GeneralColors } from 'theme/colors';
import Typography from 'components/shared/Typography';
import { OtherUsersButton, Wrapper, AvatarButton } from './index.style';

type AvatarUser = {
  color: Object | string,
  name: string,
  image?: string,
};

export type AvatarSection = {
  fiveProjectUsers: Array<AvatarUser>,
  otherUsersCount: number,
};

type AvatarsClicked = { clicked: () => void };

const ProjectPersons = ({
  fiveProjectUsers,
  otherUsersCount,
  clicked,
}: AvatarSection & AvatarsClicked) => (
  <Wrapper onClick={clicked}>
    {fiveProjectUsers.map((user, key) => (
      <AvatarButton
        key={key}
        backgroundColor={user.color}
        imgUrl={user.image}
        width="33px"
        height="33px"
        borderRadius="100%"
        isBorder
        font={Display3}
        color="#ffffff"
      >
        {user.name}
      </AvatarButton>
    ))}
    {otherUsersCount > 0 && (
      <OtherUsersButton
        backgroundColor={GeneralColors.vi}
        hoverBackgroundColor={GeneralColors.v}
        activeBackgroundColor={GeneralColors.v}
        radius="100%"
        spacing="0px"
        color={GeneralColors.viii}
        width="33px"
        height="33px"
      >
        <Typography font={Display2} color={GeneralColors.viii}>
          {`+${otherUsersCount}`}
        </Typography>
      </OtherUsersButton>
    )}
  </Wrapper>
);

export default ProjectPersons;
