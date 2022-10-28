//@flow
import { shallow, mount } from 'enzyme';
import React from 'react';
import Breadcrumb from '.';
import renderer from 'react-test-renderer';

describe('<Breadcrumb />', () => {
  it('checks the UI', () => {
    const wrapper = renderer
      .create(
        <Breadcrumb
          clicked={console.log}
          items={['Projects', 'Animal House', 'Episode1']}
        />
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('checks click event', () => {
    const mockCallBack = jest.fn();
    const wrapper = mount(
      <Breadcrumb
        items={['Projects', 'Animal House', 'Episode1']}
        clicked={mockCallBack}
      />
    );
    wrapper
      .find('li')
      .last()
      .simulate('click');
    expect(mockCallBack).toHaveBeenCalled();
  });
  it('checks value of click event', () => {
    const mockCallBack = jest.fn();
    const wrapper = mount(
      <Breadcrumb
        items={['Projects', 'Animal House', 'Episode1']}
        clicked={mockCallBack}
      />
    );
    wrapper
      .find('li')
      .last()
      .simulate('click');
    expect(mockCallBack).toHaveBeenCalledWith(2);
  });
});
