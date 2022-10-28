//@flow
import { shallow, render } from 'enzyme';
import React from 'react';
import Button from '.';
import renderer from 'react-test-renderer';

describe('<Button />', () => {
  it('checks click event', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(
      <Button
        backgroundColor="#7b7b9a"
        hoverBackgroundColor="#262640"
        activeBackgroundColor="#262640"
        radius="50%"
        spacing="0px"
        icon="61543"
        iconSize="19px"
        iconColor="#fff"
        width="53px"
        height="53px"
        clicked={mockCallBack}
      />
    );
    wrapper.simulate('click');
    expect(mockCallBack).toHaveBeenCalled();
  });
  it('checks the UI', () => {
    const wrapper = renderer
      .create(
        <Button
          rtl
          backgroundColor="#0d0d1a"
          hoverColor="#fff"
          icon="61703"
          iconColor="#c1bbcc"
          spacing="10px"
          iconSize="20px"
          width="130px"
          height="58px"
        />
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('again checks the UI', () => {
    const wrapper = renderer
      .create(
        <Button
          backgroundColor="#262640"
          hoverBackgroundColor="#212133"
          activeBackgroundColor="#212133"
          radius="50%"
          spacing="0px"
          icon="61543"
          iconSize="20px"
          width="54px"
          height="54px"
        />
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
