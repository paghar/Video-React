//@flow
import React from 'react';
import renderer from 'react-test-renderer';
import CardDetail from '.';

describe('<AssetCardDetail />', () => {
  it('AssetCardDetail Snapshot test with all details', () => {
    const tree = renderer
      .create(
        <CardDetail
          assetExtension="mp4"
          duration="12:00"
          size="16 MB"
          commentsCount={6}
          assetName="My beautiful picture"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('AssetCardDetail Snapshot test with all details execpt duration', () => {
    const tree = renderer
      .create(
        <CardDetail
          assetExtension="mp4"
          size="16 MB"
          commentsCount={6}
          assetName="My beautiful picture"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('AssetCardDetail Snapshot test with all details execpt comments', () => {
    const tree = renderer
      .create(
        <CardDetail
          assetExtension="mp4"
          size="16 MB"
          duration="12:00"
          assetName="My beautiful picture"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('AssetCardDetail Snapshot test with all details execpt comments and duration', () => {
    const tree = renderer
      .create(
        <CardDetail
          assetExtension="mp4"
          size="16 MB"
          assetName="My beautiful picture"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
