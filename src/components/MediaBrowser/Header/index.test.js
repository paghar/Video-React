//@flow
import React from 'react';
import renderer from 'react-test-renderer';
import { Display6 } from 'theme/fonts';
import Header from '.';
import { shallow, mount } from 'enzyme';
import { Avatars as AvatarColors } from 'theme/colors';
import image from 'assets/image/christopher-campbell-rDEOVtE7vOs-unsplash.png';
import Avatar from 'components/shared/Avatar';

describe('<MediaBrowserHeader />', () => {
  it('Header Snapshot test', () => {
    const tree = renderer
      .create(
        <Header
          projectTitle="Animal House"
          fiveProjectUsers={[
            {
              color: AvatarColors[0],
              name: 'PZ',
              image,
            },
            {
              color: AvatarColors[0],
              name: 'PZ',
              image,
            },
          ]}
          otherUsersCount={3}
          avatarsClicked={console.log}
          addUserClicked={console.log}
          shareClicked={console.log}
          newClicked={console.log}
          notificationClicked={console.log}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Header Titles check', () => {
    const wrapper = shallow(
      <Header
        projectTitle="Animal House"
        fiveProjectUsers={[
          {
            color: AvatarColors[0],
            name: 'PZ',
            image,
          },
          {
            color: AvatarColors[0],
            name: 'PZ',
            image,
          },
        ]}
        otherUsersCount={3}
        avatarsClicked={console.log}
        addUserClicked={console.log}
        shareClicked={console.log}
        newClicked={console.log}
        notificationClicked={console.log}
      />
    );

    expect(wrapper.html().includes('Animal House')).toEqual(true);
  });
  it('Header events test', () => {
    const mockAvatarsClick = jest.fn();
    const mockAddUserClick = jest.fn();
    const mockShareClick = jest.fn();
    const mockNewClick = jest.fn();
    const mockNotificationClick = jest.fn();
    const wrapper = mount(
      <Header
        projectTitle="Animal House"
        fiveProjectUsers={[
          {
            color: AvatarColors[0],
            name: 'PZ',
            image,
          },
          {
            color: AvatarColors[0],
            name: 'PZ',
            image,
          },
        ]}
        otherUsersCount={3}
        avatarsClicked={mockAvatarsClick}
        addUserClicked={mockAddUserClick}
        shareClicked={mockShareClick}
        newClicked={mockNewClick}
        notificationClicked={mockNotificationClick}
      />
    );
    wrapper
      .find(Avatar)
      .at(0)
      .simulate('click');
    expect(mockAvatarsClick).toHaveBeenCalled();
    wrapper
      .find('button')
      .at(0)
      .simulate('click');
    expect(mockAddUserClick).toHaveBeenCalled();
    wrapper
      .find('button')
      .at(4)
      .simulate('click');
    expect(mockShareClick).toHaveBeenCalled();
    wrapper
      .find('button')
      .at(5)
      .simulate('click');
    expect(mockNewClick).toHaveBeenCalled();
    wrapper
      .find('button')
      .at(6)
      .simulate('click');
    expect(mockNotificationClick).toHaveBeenCalled();
  });
});
