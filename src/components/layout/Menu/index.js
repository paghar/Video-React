//@flow
import React from 'react';
import {
  MenuContainer,
  BottomContiner,
  UsedSpacePart,
  MenuInnerContent,
} from './index.style';
import Navigation from 'components/layout/Menu/Navigation';
import Setting from 'components/layout/Menu/Setting';
import type { MenuDataType } from 'constants/MenuData';

type Props = {
  isShrinked?: boolean,
  toggleMenu: () => void,
  menuData: Array<MenuDataType>,
  logoBackgroundColor: string,
  logoImgUrl?: string,
  logoText: string,
  usedSpace: string,
  totalSpace: string,
  imageAvatar: string,
  logoShortName: string,
  avatarShortName: string,
  avatarColor: string,
  className?: string,
};

function Menu({
  isShrinked,
  toggleMenu,
  menuData,
  logoBackgroundColor,
  logoImgUrl,
  logoText,
  usedSpace,
  totalSpace,
  imageAvatar,
  logoShortName,
  avatarShortName,
  avatarColor,
  className,
}: Props) {
  return (
    <MenuContainer isShrinked={isShrinked} className={className}>
      <MenuInnerContent>
        <Navigation
          logoBackgroundColor={logoBackgroundColor}
          logoImgUrl={logoImgUrl}
          logoText={logoText}
          menuData={menuData}
          logoShortName={logoShortName}
        ></Navigation>
        <BottomContiner isShrinked={isShrinked}>
          <UsedSpacePart
            usedSpace={usedSpace}
            totalSpace={totalSpace}
          ></UsedSpacePart>
          <Setting
            isShrinked={isShrinked}
            toggleMenu={toggleMenu}
            imageAvatar={imageAvatar}
            avatarShortName={avatarShortName}
            avatarColor={avatarColor}
          ></Setting>
        </BottomContiner>
      </MenuInnerContent>
    </MenuContainer>
  );
}

export default Menu;
