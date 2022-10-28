//@flow
import React from 'react';
import FolderCardListView from '.';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('<FolderCardListView />', () => {
  it('checks  UI', () => {
    const wrapper = renderer
      .create(
        <FolderCardListView
          selected={false}
          name="Hiking Experience"
          fileCount={3}
          uploader="Emily Parkson"
          size="12 MB"
          uploadDate={1553277015000}
        />
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('checks UI selected', () => {
    const wrapper = renderer
      .create(
        <FolderCardListView
          selected={true}
          name="Hiking Experience"
          fileCount={3}
          uploader="Emily Parkson"
          size="12 MB"
          uploadDate={1553277015000}
        />
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
