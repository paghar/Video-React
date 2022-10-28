//@flow
import React from 'react';
import Typography from '.';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('<Typography />', () => {
  it('checks the text to be exist', () => {
    const wrapper = shallow(
      <Typography
        color="red"
        font={{
          fontSize: '20px',
          fontWeight: '500',
          lineHeight: '60px',
          fontName: "'Red Hat Text', sans-serif",
        }}
        hoverable
      >
        hello
      </Typography>
    );
    expect(wrapper.text()).toBe('hello');
  });
  it('checks the UI', () => {
    const wrapper = renderer
      .create(
        <Typography
          hoverable
          font={{
            fontSize: '10px',
            fontWeight: '400',
            lineHeight: '60px',
            fontName: "'Red Hat Text', sans-serif",
          }}
          color="red"
        >
          hii
        </Typography>
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('has checks the UI', () => {
    const wrapper = renderer
      .create(
        <Typography
          font={{
            fontSize: '15px',
            fontWeight: '600',
            lineHeight: '50px',
            fontName: "'Red Hat Text', sans-serif",
          }}
          color="red"
        >
          test
        </Typography>
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
