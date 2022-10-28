//@flow
import React from 'react';
import { Logo, Text, IconItem, MenuItem, LogoContainer } from './index.style';
import { Display1, Display3 } from 'theme/fonts';
import { Generals } from 'theme/colors';
import type { MenuDataType } from 'constants/MenuData';

type Props = {
  logoBackgroundColor: string,
  logoImgUrl?: string,
  logoText: string,
  menuData: Array<MenuDataType>,
  logoShortName: string,
};

function Navigation({
  logoBackgroundColor,
  logoImgUrl,
  logoText,
  menuData,
  logoShortName,
}: Props) {
  return (
    <div>
      <LogoContainer>
        <Logo
          backgroundColor={logoBackgroundColor}
          font={Display3}
          imgUrl={logoImgUrl}
          color={Generals.viii}
          width="31px"
          height="31px"
          borderRadius="100%"
        >
          {logoShortName}
        </Logo>

        <Text font={Display1} color={Generals.vii} hoverable>
          {logoText}
        </Text>
      </LogoContainer>

      {menuData.map(item => (
        <MenuItem key={item.id}>
          <IconItem
            fontSize="16px"
            color={Generals.vii}
            hoverColor={Generals.viii}
            iconNumber={item.menuIcon}
          ></IconItem>
          <Text font={Display1} hoverable color={Generals.vi}>
            {item.menuTitle}
          </Text>
        </MenuItem>
      ))}
    </div>
  );
}

export default Navigation;
