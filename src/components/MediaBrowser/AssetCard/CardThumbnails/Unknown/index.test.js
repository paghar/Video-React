//@flow
import React from 'react';
import renderer from 'react-test-renderer';
import Unknown from '.';
import cardImage from 'assets/image/Colleagues_looking_at_information_on_mobile_phone_screen_Videos_Mixkit.png';

describe('<AssetCardUnknownThumbnail />', () => {
  it('Unknown Thumbnail Snapshot test', () => {
    const tree = renderer.create(<Unknown />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
