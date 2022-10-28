//@flow
import React, { useState } from 'react';
import Menu from 'components/layout/Menu';
import { MenuData } from 'constants/MenuData';
import logoImage from 'assets/image/avasam-1.png';
import { Avatars } from 'theme/colors';
import imageAvatar from 'assets/image/christopher-campbell-rDEOVtE7vOs-unsplash.png';
import { LEFT_MENU_ANIMATION_DURATION } from 'constants/variables';

type Props = {
  className?: string,
};

function MenuContainer({ className }: Props) {
  const [shrinked, setShrinked] = useState(false);
  const toggleMenu = () => {
    setShrinked(!shrinked);
    // dispatch resize event to update shufflejs after animation done
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, LEFT_MENU_ANIMATION_DURATION + 50);
  };
  return (
    <Menu
      isShrinked={shrinked}
      toggleMenu={toggleMenu}
      className={className}
      menuData={MenuData}
      logoBackgroundColor={Avatars[0]}
      logoImgUrl={logoImage}
      logoText="Avasam Agency"
      logoShortName="AA"
      usedSpace="80"
      totalSpace="250"
      imageAvatar={imageAvatar}
      avatarShortName="AB"
      avatarColor={Avatars[0]}
    />
  );
}

export default MenuContainer;
