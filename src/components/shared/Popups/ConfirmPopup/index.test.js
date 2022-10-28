//@flow
import React from 'react';
import renderer from 'react-test-renderer';
import ConfirmPopup from '.';
import { Generals, Primary, Secondary } from 'theme/colors';
import imageUrl from 'assets/image/2018-11-05_1306-640x268.png';
import uploadImgUrl from 'assets/image/Group_55762x.png';
import { mount } from 'enzyme';

const thumbnail1 = { imgUrl: imageUrl, imgWidth: '73px' };
const thumbnail2 = { imgUrl: uploadImgUrl, imgWidth: '4px' };
const thumbnailNull = { imgUrl: '', imgWidth: '' };

describe('<ConfirmPopup />', () => {
  const ConfirmDeletButtons = [
    {
      id: 1,
      btnTitle: 'cancel',
      backgroundColor: Generals.viii,
      hoverBackgroundColor: Generals.vii,
      activeBackgroundColor: Generals.vi,
      color: Generals.vii,
      hoverColor: Generals.viii,
      hasBorder: Generals.vii,
      clicked: jest.fn(),
    },
    {
      id: 2,
      btnTitle: 'Delete',
      backgroundColor: Primary.Dim,
      hoverBackgroundColor: Primary.Light,
      activeBackgroundColor: Primary.Dark,
      color: Generals.viii,
      hoverColor: Generals.viii,
      clicked: jest.fn(),
    },
  ];

  const ConfirmDeleteWithImageButtons = [
    {
      id: 1,
      btnTitle: 'cancel',
      backgroundColor: Generals.viii,
      hoverBackgroundColor: Generals.vii,
      activeBackgroundColor: Generals.vi,
      color: Generals.vii,
      hoverColor: Generals.viii,
      hasBorder: Generals.vii,
      clicked: jest.fn(),
    },
    {
      id: 2,
      btnTitle: 'Delete',
      backgroundColor: Secondary.iii,
      hoverBackgroundColor: Secondary.iii,
      activeBackgroundColor: Secondary.iii,
      color: Generals.viii,
      hoverColor: Generals.viii,
      clicked: jest.fn(),
    },
  ];

  const UploadFailButtons = [
    {
      id: 1,
      btnTitle: 'cancel',
      backgroundColor: Generals.viii,
      hoverBackgroundColor: Generals.vii,
      activeBackgroundColor: Generals.vi,
      color: Generals.vii,
      hoverColor: Generals.viii,
      hasBorder: Generals.vii,
      clicked: jest.fn(),
    },
    {
      id: 2,
      btnTitle: 'Try again',
      backgroundColor: Secondary.iii,
      hoverBackgroundColor: Secondary.iii,
      activeBackgroundColor: Secondary.iii,
      color: Generals.viii,
      hoverColor: Generals.viii,
      clicked: jest.fn(),
    },
  ];

  it('ConfirmDelete', () => {
    const tree = renderer
      .create(
        <ConfirmPopup
          backgroundColor={Generals.viii}
          width="365px"
          borderRadius="7px"
          title="Confirm Delete "
          context="You are about to delete this scene and all of its versions"
          buttons={ConfirmDeletButtons}
          thumbnail={thumbnailNull}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('ConfirmDeleteWithImage', () => {
    const tree = renderer
      .create(
        <ConfirmPopup
          backgroundColor={Generals.viii}
          width="365px"
          borderRadius="7px"
          title="Confirm Delete "
          context="You are about to delete this scene and all of its versions"
          buttons={ConfirmDeleteWithImageButtons}
          thumbnail={thumbnail1}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('UploadFail', () => {
    const tree = renderer
      .create(
        <ConfirmPopup
          backgroundColor={Generals.viii}
          width="365px"
          borderRadius="7px"
          title="Upload fail"
          context="You are about to delete this scene and all of its versions"
          buttons={UploadFailButtons}
          thumbnail={thumbnail2}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('ConfirmDeleteWithoutTitle', () => {
    const tree = renderer
      .create(
        <ConfirmPopup
          backgroundColor={Generals.viii}
          width="365px"
          borderRadius="7px"
          context="Here are some UI components which designed for a user engagement product. This product can publish in-app messages and walkthroughs"
          buttons={ConfirmDeletButtons}
          thumbnail={thumbnailNull}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Cancel Button', () => {
    const click = jest.fn();
    const ConfirmDeletButtons = [
      {
        id: 1,
        btnTitle: 'cancel',
        backgroundColor: Generals.viii,
        hoverBackgroundColor: Generals.vii,
        activeBackgroundColor: Generals.vi,
        color: Generals.vii,
        hoverColor: Generals.viii,
        hasBorder: Generals.vii,
        clicked: click,
      },
      {
        id: 2,
        btnTitle: 'Delete',
        backgroundColor: Primary.Dim,
        hoverBackgroundColor: Primary.Light,
        activeBackgroundColor: Primary.Dark,
        color: Generals.viii,
        hoverColor: Generals.viii,
        clicked: jest.fn(),
      },
    ];
    const component = mount(
      <ConfirmPopup
        backgroundColor={Generals.viii}
        width="365px"
        borderRadius="7px"
        title="Confirm Delete "
        context="You are about to delete this scene and all of its versions"
        buttons={ConfirmDeletButtons}
        thumbnail={thumbnailNull}
      />
    );
    component
      .find('button')
      .at(0)
      .simulate('click');
    expect(click).toHaveBeenCalled();
  });

  it('Delete Button or UploadFail', () => {
    const click = jest.fn();
    const ConfirmDeletButtons = [
      {
        id: 1,
        btnTitle: 'cancel',
        backgroundColor: Generals.viii,
        hoverBackgroundColor: Generals.vii,
        activeBackgroundColor: Generals.vi,
        color: Generals.vii,
        hoverColor: Generals.viii,
        hasBorder: Generals.vii,
        clicked: jest.fn(),
      },
      {
        id: 2,
        btnTitle: 'Delete',
        backgroundColor: Primary.Dim,
        hoverBackgroundColor: Primary.Light,
        activeBackgroundColor: Primary.Dark,
        color: Generals.viii,
        hoverColor: Generals.viii,
        clicked: click,
      },
    ];
    const component = mount(
      <ConfirmPopup
        backgroundColor={Generals.viii}
        width="365px"
        borderRadius="7px"
        title="Confirm Delete "
        context="You are about to delete this scene and all of its versions"
        buttons={ConfirmDeletButtons}
        thumbnail={thumbnailNull}
      />
    );
    component
      .find('button')
      .at(1)
      .simulate('click');
    expect(click).toHaveBeenCalled();
  });
});
