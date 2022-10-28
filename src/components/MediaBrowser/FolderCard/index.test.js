//@flow
import React from 'react';
import FolderCard from '.';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import image from 'assets/image/Colleagues_looking_at_information_on_mobile_phone_screen_Videos_Mixkit.png';

describe('<FolderCard />', () => {
  it('checks oneImage click', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(
      <FolderCard
        clicked={mockCallBack}
        name="Hiking Experience"
        width={255}
        fileCount={1}
        thumbnails={[image]}
        fileSize="12 MB"
        fileDuration="05:02"
        fileUploadDate={1553277015000}
        uploader="Emily Parkson"
      />
    );
    wrapper.simulate('mousedown');
    expect(mockCallBack).toHaveBeenCalled();
  });
  it('checks oneImage UI', () => {
    const mockCallBack = jest.fn();
    const wrapper = renderer
      .create(
        <FolderCard
          clicked={console.log}
          name="Hiking Experience"
          width={255}
          fileCount={1}
          uploader="Emily Parkson"
          fileSize="12 MB"
          fileDuration="05:02"
          fileUploadDate={1553277015000}
          thumbnails={[image]}
        />
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('checks twoImage UI', () => {
    const wrapper = renderer
      .create(
        <FolderCard
          clicked={console.log}
          name="Hiking Experience"
          width={255}
          fileCount={2}
          uploader="Emily Parkson"
          fileSize="12 MB"
          fileDuration="05:02"
          fileUploadDate={1553277015000}
          thumbnails={[image, image]}
        />
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('checks threeImage UI', () => {
    const wrapper = renderer
      .create(
        <FolderCard
          clicked={console.log}
          name="Hiking Experience"
          width={255}
          fileCount={3}
          uploader="Emily Parkson"
          fileSize="12 MB"
          fileDuration="05:02"
          fileUploadDate={1553277015000}
          thumbnails={[image, image, image]}
        />
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('checks fourImage UI', () => {
    const wrapper = renderer
      .create(
        <FolderCard
          clicked={console.log}
          name="Hiking Experience"
          width={255}
          fileCount={4}
          uploader="Emily Parkson"
          fileSize="12 MB"
          fileDuration="05:02"
          fileUploadDate={1553277015000}
          thumbnails={[image, image, image, image]}
        />
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('checks fiveImage UI', () => {
    const wrapper = renderer
      .create(
        <FolderCard
          clicked={console.log}
          name="Hiking Experience"
          width={255}
          fileCount={5}
          uploader="Emily Parkson"
          fileSize="12 MB"
          fileDuration="05:02"
          fileUploadDate={1553277015000}
          thumbnails={[image, image, image, image, image]}
        />
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('checks more than fiveImage UI', () => {
    const wrapper = renderer
      .create(
        <FolderCard
          clicked={console.log}
          name="Hiking Experience"
          width={255}
          fileCount={7}
          uploader="Emily Parkson"
          fileSize="12 MB"
          fileDuration="05:02"
          fileUploadDate={1553277015000}
          thumbnails={[image, image, image, image, image, image]}
        />
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('checks selected Folder UI', () => {
    const wrapper = renderer
      .create(
        <FolderCard
          clicked={console.log}
          selected
          name="Hiking Experience"
          width={255}
          fileCount={3}
          uploader="Emily Parkson"
          fileSize="12 MB"
          fileDuration="05:02"
          fileUploadDate={1553277015000}
          thumbnails={[image, image, image]}
        />
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
