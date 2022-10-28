//@flow
import React from 'react';
import renderer from 'react-test-renderer';
import CardListView from '.';

describe('<CardListView />', () => {
  it('CardListView Snapshot test', () => {
    const tree = renderer
      .create(
        <CardListView
          cardWidth={250}
          status={{ caption: 'In Progress', color: 'green' }}
          version={5}
          duration="12:00"
          size="16 MB"
          commentsCount={6}
          assetName="Day10-month 12-halllow"
          assetExtension="mp4"
          uploader="Emily Parkson"
          fileUploadDate={1553277015000}
          expanded
          selected
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('CardListView Snapshot test without status', () => {
    const tree = renderer
      .create(
        <CardListView
          cardWidth={250}
          version={5}
          duration="12:00"
          size="16 MB"
          commentsCount={6}
          assetName="Day10-month 12-halllow"
          assetExtension="mp4"
          uploader="Emily Parkson"
          fileUploadDate={1553277015000}
          expanded
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('CardListView Snapshot test without comment', () => {
    const tree = renderer
      .create(
        <CardListView
          cardWidth={250}
          version={5}
          status={{ caption: 'Rejected', color: 'red' }}
          duration="12:00"
          size="16 MB"
          assetName="Day10-month 12-halllow"
          assetExtension="mp4"
          uploader="Emily Parkson"
          fileUploadDate={1553277015000}
          expanded
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('CardListView Snapshot test without version', () => {
    const tree = renderer
      .create(
        <CardListView
          cardWidth={250}
          status={{ caption: 'Rejected', color: 'red' }}
          duration="12:00"
          size="16 MB"
          assetName="Day10-month 12-halllow"
          assetExtension="mp4"
          uploader="Emily Parkson"
          fileUploadDate={1553277015000}
          expanded
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('CardListView Snapshot test selected', () => {
    const tree = renderer
      .create(
        <CardListView
          cardWidth={250}
          status={{ caption: 'Rejected', color: 'red' }}
          duration="12:00"
          size="16 MB"
          assetName="Day10-month 12-halllow"
          assetExtension="mp4"
          uploader="Emily Parkson"
          fileUploadDate={1553277015000}
          expanded
          selected
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
