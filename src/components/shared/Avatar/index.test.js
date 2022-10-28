//@flow
import React from 'react';
import renderer from 'react-test-renderer';
import { Display6 } from 'theme/fonts';
import Avatar from '.';
import { shallow } from 'enzyme';

import image from 'assets/image/christopher-campbell-rDEOVtE7vOs-unsplash.png';

describe('<Avatar />', () => {
  it('Avatar', () => {
    const tree = renderer
      .create(
        <Avatar
          backgroundColor="#7b7b9a"
          imgUrl={image}
          width="53px"
          height="53px"
          borderRadius="100%"
          font={Display6}
          color="#ffffff"
        >
          PZ
        </Avatar>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Avatar Click Event', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(
      <Avatar
        backgroundColor="#7b7b9a"
        imgUrl={image}
        width="53px"
        height="53px"
        borderRadius="100%"
        font={Display6}
        color="#ffffff"
        avatarClick={mockCallBack}
      >
        PZ
      </Avatar>
    );
    wrapper.simulate('click');
    expect(mockCallBack).toHaveBeenCalled();
  });

  it('No image Avatar', () => {
    const tree = renderer
      .create(
        <Avatar
          backgroundColor="#7b7b9a"
          width="53px"
          height="53px"
          borderRadius="100%"
          font={Display6}
          color="#ffffff"
        >
          PZ
        </Avatar>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('With border', () => {
    const tree = renderer
      .create(
        <Avatar
          backgroundColor="#7b7b9a"
          isBorder
          width="53px"
          height="53px"
          borderRadius="100%"
          font={Display6}
          color="#ffffff"
        >
          PZ
        </Avatar>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('With image border', () => {
    const tree = renderer
      .create(
        <Avatar
          backgroundColor="#7b7b9a"
          imgUrl={image}
          isBorder
          width="53px"
          height="53px"
          borderRadius="100%"
          font={Display6}
          color="#ffffff"
        >
          PZ
        </Avatar>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('different size', () => {
    const tree = renderer
      .create(
        <Avatar
          backgroundColor="#7b7b9a"
          imgUrl={image}
          isBorder
          width="100px"
          height="100px"
          borderRadius="100%"
          font={Display6}
          color="#ffffff"
        >
          PZ
        </Avatar>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('different radius', () => {
    const tree = renderer
      .create(
        <Avatar
          backgroundColor="#7b7b9a"
          imgUrl={image}
          isBorder
          width="70px"
          height="70px"
          borderRadius="100%"
          font={Display6}
          color="#ffffff"
        >
          PZ
        </Avatar>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
