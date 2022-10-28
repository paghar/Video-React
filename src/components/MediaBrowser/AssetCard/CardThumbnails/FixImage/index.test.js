//@flow
import React from 'react';
import renderer from 'react-test-renderer';
import FixImage from '.';
import cardImage from 'assets/image/Colleagues_looking_at_information_on_mobile_phone_screen_Videos_Mixkit.png';

describe('<AssetCardFixImageThumbnail />', () => {
  it('Fix Image Thumbnail Snapshot test', () => {
    const tree = renderer
      .create(<FixImage thumbnailSrc={cardImage} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
