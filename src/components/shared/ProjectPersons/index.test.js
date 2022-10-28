//@flow
import { shallow } from 'enzyme';
import React from 'react';
import ProjectPersons from '.';
import renderer from 'react-test-renderer';
import { Avatars as AvatarColors } from 'theme/colors';
import image from 'assets/image/christopher-campbell-rDEOVtE7vOs-unsplash.png';

describe('<ProjectPersons />', () => {
  it('checks the UI with others', () => {
    const wrapper = renderer
      .create(
        <ProjectPersons
          fiveProjectUsers={[
            {
              color: AvatarColors[0],
              name: 'PZ',
              image,
            },
            {
              color: AvatarColors[2],
              name: 'PZ',
            },
          ]}
          otherUsersCount={3}
          clicked={console.log}
        />
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('checks the UI without others', () => {
    const wrapper = renderer
      .create(
        <ProjectPersons
          fiveProjectUsers={[
            {
              color: AvatarColors[0],
              name: 'PZ',
              image,
            },
            {
              color: AvatarColors[2],
              name: 'PZ',
            },
          ]}
          otherUsersCount={0}
          clicked={console.log}
        />
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('should call clicked if clicked on', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(
      <ProjectPersons
        fiveProjectUsers={[
          {
            color: AvatarColors[0],
            name: 'PZ',
            image,
          },
          {
            color: AvatarColors[2],
            name: 'PZ',
          },
        ]}
        otherUsersCount={0}
        clicked={mockCallBack}
      />
    );
    wrapper.simulate('click');
    expect(mockCallBack).toHaveBeenCalled();
  });
});
