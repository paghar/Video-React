// @flow
import React from 'react';
import {
  Wrapper,
  SearchInput,
  AddUserButton,
  NotificationsButton,
  NewButton,
  ShareButton,
} from './index.style';
import Typography from 'components/shared/Typography';
import { Title1, Display1 } from 'theme/fonts';
import { Generals, Primary } from 'theme/colors';
import ProjectPersons from 'components/shared//ProjectPersons';
import type { AvatarSection } from 'components/shared//ProjectPersons';

type Props = {
  projectTitle: string,
  avatarsClicked: () => void,
  addUserClicked: () => void,
  shareClicked: () => void,
  newClicked: () => void,
  notificationClicked: () => void,
  className?: string,
};

const Header = ({
  projectTitle,
  fiveProjectUsers,
  otherUsersCount,
  avatarsClicked,
  addUserClicked,
  shareClicked,
  newClicked,
  notificationClicked,
  className,
}: Props & AvatarSection) => {
  return (
    <Wrapper className={className}>
      <Typography font={Title1} color={Generals.viii} hoverable>
        {projectTitle}
      </Typography>
      <SearchInput />
      <AddUserButton
        rtl
        backgroundColor={Generals.v}
        hoverBackgroundColor={Generals.iv}
        activeBackgroundColor={Generals.iv}
        radius="50%"
        paddingRight="0px"
        icon="61447"
        iconSize="13px"
        iconColor={Generals.vii}
        width="31px"
        height="31px"
        clicked={addUserClicked}
      />
      <ProjectPersons
        fiveProjectUsers={fiveProjectUsers}
        otherUsersCount={otherUsersCount}
        clicked={avatarsClicked}
      />

      <ShareButton
        backgroundColor={Primary.Dim}
        hoverBackgroundColor={Primary.Light}
        radius="5px"
        icon="61920"
        iconColor={Generals.viii}
        spacing="4.8px"
        width="75px"
        iconSize="14px"
        height="34px"
        activeBackgroundColor={Primary.Dark}
        clicked={shareClicked}
      >
        <Typography font={Display1} color={Generals.viii}>
          Share
        </Typography>
      </ShareButton>
      <NewButton
        backgroundColor={Generals.v}
        hoverBackgroundColor={Generals.iv}
        radius="5px"
        iconSize="13px"
        icon="61543"
        spacing="4.8px"
        width="63px"
        height="34px"
        clicked={newClicked}
        iconColor={Generals.viii}
        activeBackgroundColor={Generals.iv}
      >
        <Typography font={Display1} color={Generals.viii}>
          New
        </Typography>
      </NewButton>
      <NotificationsButton
        rtl
        backgroundColor="transparent"
        hoverBackgroundColor={Generals.iv}
        activeBackgroundColor={Generals.v}
        radius="50%"
        paddingRight="0px"
        icon="61683"
        iconSize="15px"
        iconColor={Generals.vii}
        width="31px"
        height="31px"
        clicked={notificationClicked}
      />
    </Wrapper>
  );
};

export default Header;
