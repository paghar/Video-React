//@flow
import { shallow, mount } from 'enzyme';
import React from 'react';
import Input from '.';
import renderer from 'react-test-renderer';
import { Display3 } from 'theme/fonts';

describe('<Input />', () => {
  it('checks the UI', () => {
    const wrapper = renderer
      .create(
        <Input
          height="53px"
          width="383px"
          font={Display3}
          rtl
          paddingRL="25px"
          borderRadius="40px"
          iconSize="22px"
          textColor="#7b7b9a"
          backgroundColor="#212133"
          hoverBackgroundColor="#000"
          placeholder="Results"
          icon="61703"
          iconColor="#7b7b9a"
        />
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('checks the reverse UI', () => {
    const wrapper = renderer
      .create(
        <Input
          height="53px"
          width="383px"
          font={Display3}
          borderRadius="40px"
          textColor="#7b7b9a"
          backgroundColor="#212133"
          hoverBackgroundColor="#000"
          placeholder="Search here..."
          icon="61442"
          iconColor="#7b7b9a"
          iconSize="22px"
          paddingRL="25px"
        />
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('checks change event', () => {
    const mockCallBack = jest.fn();
    const wrapper = mount(
      <Input
        height="53px"
        width="383px"
        font={Display3}
        borderRadius="40px"
        textColor="#7b7b9a"
        backgroundColor="#212133"
        hoverBackgroundColor="#000"
        placeholder="Search here..."
        icon="61442"
        iconColor="#7b7b9a"
        iconSize="22px"
        paddingRL="25px"
        changed={mockCallBack}
      />
    );
    wrapper.find('input').simulate('change');
    expect(mockCallBack).toHaveBeenCalled();
  });
  it('checks blur event', () => {
    const mockCallBack = jest.fn();
    const wrapper = mount(
      <Input
        height="53px"
        width="383px"
        font={Display3}
        borderRadius="40px"
        textColor="#7b7b9a"
        backgroundColor="#212133"
        hoverBackgroundColor="#000"
        placeholder="Search here..."
        icon="61442"
        iconColor="#7b7b9a"
        iconSize="22px"
        paddingRL="25px"
        blured={mockCallBack}
      />
    );
    wrapper.find('input').simulate('blur');
    expect(mockCallBack).toHaveBeenCalled();
  });
  it('checks focus event', () => {
    const mockCallBack = jest.fn();
    const wrapper = mount(
      <Input
        height="53px"
        width="383px"
        font={Display3}
        borderRadius="40px"
        textColor="#7b7b9a"
        backgroundColor="#212133"
        hoverBackgroundColor="#000"
        placeholder="Search here..."
        icon="61442"
        iconColor="#7b7b9a"
        iconSize="22px"
        paddingRL="25px"
        focused={mockCallBack}
      />
    );
    wrapper.find('input').simulate('focus');
    expect(mockCallBack).toHaveBeenCalled();
  });
});
