//@flow
import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '.';
import Typography from 'components/shared/Typography';
import { Display1 } from 'theme/fonts';
import { Primary, Generals } from 'theme/colors';
export default { title: 'Button' };

export const ShareButton = () => (
  <Button
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
    clicked={action('clicked')}
  >
    <Typography font={Display1} color={Generals.viii}>
      Share
    </Typography>
  </Button>
);

export const More = () => (
  <Button
    rtl
    backgroundColor={Generals.i}
    hoverColor={Generals.viii}
    icon="61497"
    iconColor="#c1bbcc"
    spacing="4.8px"
    iconSize="10px"
    width="65px"
    height="29px"
    clicked={action('clicked')}
  ></Button>
);

export const plus3 = () => (
  <Button
    backgroundColor={Generals.vi}
    hoverBackgroundColor={Generals.v}
    activeBackgroundColor={Generals.v}
    radius="50%"
    spacing="0px"
    width="31px"
    height="31px"
    clicked={action('clicked')}
  >
    <Typography font={Display1} color={Generals.viii}>
      +3
    </Typography>
  </Button>
);
export const PlusUser = () => (
  <Button
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
    clicked={action('clicked')}
  />
);
export const NameDropDown = () => (
  <Button
    rtl
    backgroundColor={Generals.ii}
    hoverColor={Generals.viii}
    icon="61703"
    iconColor={Generals.vii}
    spacing="4.8px"
    iconSize="10px"
    width="65px"
    height="29px"
    clicked={action('clicked')}
  >
    <Typography font={Display1} color={Generals.vii}>
      Name
    </Typography>
  </Button>
);
export const New = () => (
  <Button
    backgroundColor={Generals.v}
    hoverBackgroundColor={Generals.iv}
    hoverColor={Generals.viii}
    radius="5px"
    iconSize="13px"
    icon="61543"
    spacing="4.8px"
    width="63px"
    height="34px"
    clicked={action('clicked')}
    iconColor={Generals.viii}
  >
    <Typography font={Display1} color={Generals.viii}>
      New
    </Typography>
  </Button>
);
