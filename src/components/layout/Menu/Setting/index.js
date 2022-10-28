//@flow
import React from 'react';
import {
  SettingItems,
  AvatarBtn,
  QuestionBtn,
  SettingBtn,
  ToggleBtn,
} from './index.style';
import { Generals } from 'theme/colors';
import { Display3 } from 'theme/fonts';

type Props = {
  imageAvatar: string,
  isShrinked?: boolean,
  toggleMenu: () => void,
  avatarShortName: string,
  avatarColor: string,
};
function Setting({
  isShrinked,
  toggleMenu,
  imageAvatar,
  avatarShortName,
  avatarColor,
}: Props) {
  return (
    <SettingItems isShrinked={isShrinked}>
      <AvatarBtn
        isShrinked={isShrinked}
        backgroundColor={avatarColor}
        imgUrl={imageAvatar}
        width="30px"
        height="30px"
        borderRadius="100%"
        font={Display3}
        iconColor={Generals.viii}
        color={Generals.viii}
      >
        {avatarShortName}
      </AvatarBtn>

      <QuestionBtn
        isShrinked={isShrinked}
        backgroundColor={Generals.v}
        hoverBackgroundColor={Generals.iv}
        radius="100%"
        icon="61736"
        iconSize="13px"
        iconColor={Generals.vii}
        width="30px"
        height="30px"
      ></QuestionBtn>

      <SettingBtn
        isShrinked={isShrinked}
        backgroundColor={Generals.v}
        hoverBackgroundColor={Generals.iv}
        radius="100%"
        icon="61459"
        iconSize="13px"
        iconColor={Generals.vii}
        width="30px"
        height="30px"
      ></SettingBtn>

      <ToggleBtn
        hoverBackgroundColor={Generals.v}
        isShrinked={isShrinked}
        clicked={() => toggleMenu()}
        backgroundColor={Generals.iii}
        radius="100%"
        icon={isShrinked ? '61497' : '61536'}
        iconSize="16px"
        iconColor={Generals.vii}
        width="30px"
        height="30px"
      ></ToggleBtn>
    </SettingItems>
  );
}

export default Setting;
