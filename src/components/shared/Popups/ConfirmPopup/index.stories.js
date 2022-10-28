//@flow
import React from 'react';
import { action } from '@storybook/addon-actions';
import ConfirmPopup from '.';
import { Generals, Primary, PromptWarn } from 'theme/colors';
import { Display2 } from 'theme/fonts';
import { addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import imageUrl from 'assets/image/2018-11-05_1306-640x268.png';
import uploadImgUrl from 'assets/image/Group_55762x.png';

const thumbnail1 = { imgUrl: imageUrl, imgWidth: '73px' };
const thumbnail2 = { imgUrl: uploadImgUrl, imgWidth: '49px' };
const thumbnailNull = { imgUrl: '', imgWidth: '' };
const ConfirmDeletButtons = [
  {
    id: 1,
    btnTitle: 'cancel',
    backgroundColor: Generals.viii,
    hoverBackgroundColor: Generals.vii,
    activeBackgroundColor: Generals.vi,
    clicked: action('Click On button'),
    font: Display2,
    color: Generals.vii,
    hoverColor: Generals.viii,
    hasBorder: Generals.vii,
  },
  {
    id: 2,
    btnTitle: 'Delete',
    backgroundColor: Primary.Dim,
    hoverBackgroundColor: Primary.Light,
    activeBackgroundColor: Primary.Dark,
    clicked: action('Click On button'),
    font: Display2,
    color: Generals.viii,
    hoverColor: Generals.viii,
  },
];

const ConfirmDeleteWithImageButtons = [
  {
    id: 1,
    btnTitle: 'cancel',
    backgroundColor: Generals.viii,
    hoverBackgroundColor: Generals.vii,
    activeBackgroundColor: Generals.vi,
    clicked: action('Click On button'),
    color: Generals.vii,
    hoverColor: Generals.viii,
    hasBorder: Generals.vii,
  },
  {
    id: 2,
    btnTitle: 'Delete',
    backgroundColor: PromptWarn.Dim,
    hoverBackgroundColor: PromptWarn.Light,
    activeBackgroundColor: PromptWarn.Dark,
    clicked: action('Click On button'),
    color: Generals.viii,
    hoverColor: Generals.viii,
  },
];

const UploadFailButtons = [
  {
    id: 1,
    btnTitle: 'cancel',
    backgroundColor: Generals.viii,
    hoverBackgroundColor: Generals.vii,
    activeBackgroundColor: Generals.vi,
    clicked: action('Click On button'),
    color: Generals.vii,
    hoverColor: Generals.viii,
    hasBorder: Generals.vii,
  },
  {
    id: 2,
    btnTitle: 'Try again',
    backgroundColor: PromptWarn.Dim,
    hoverBackgroundColor: PromptWarn.Light,
    activeBackgroundColor: PromptWarn.Dark,
    clicked: action('Click On button'),
    color: Generals.viii,
    hoverColor: Generals.viii,
  },
];

addParameters({
  options: {
    theme: themes.light,
  },
});

export default { title: 'MessageBox' };

export const ConfirmDelete = () => (
  <ConfirmPopup
    backgroundColor={Generals.viii}
    width="365px"
    borderRadius="7px"
    title="Confirm Delete "
    context="You are about to delete this scene and all of its versions"
    buttons={ConfirmDeletButtons}
    thumbnail={thumbnailNull}
  ></ConfirmPopup>
);

export const ConfirmDeleteWithImage = () => (
  <ConfirmPopup
    backgroundColor={Generals.viii}
    width="365px"
    borderRadius="7px"
    title="Confirm Delete "
    context="You are about to delete this scene and all of its versions"
    buttons={ConfirmDeleteWithImageButtons}
    thumbnail={thumbnail1}
  ></ConfirmPopup>
);

export const UploadFail = () => (
  <ConfirmPopup
    backgroundColor={Generals.viii}
    width="365px"
    borderRadius="7px"
    title="Upload fail"
    context="You are about to delete this scene and all of its versions"
    buttons={UploadFailButtons}
    thumbnail={thumbnail2}
  ></ConfirmPopup>
);

export const ConfirmDeleteWithoutTitle = () => (
  <ConfirmPopup
    backgroundColor={Generals.viii}
    width="365px"
    borderRadius="7px"
    context="Here are some UI components which designed for a user engagement product. This product can publish in-app messages and walkthroughs"
    buttons={ConfirmDeletButtons}
    thumbnail={thumbnailNull}
  ></ConfirmPopup>
);
