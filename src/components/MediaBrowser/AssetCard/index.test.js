//@flow
import React from 'react';
import renderer from 'react-test-renderer';
import AssetCard from '.';
import cardImage from 'assets/image/Colleagues_looking_at_information_on_mobile_phone_screen_Videos_Mixkit.png';
import { FixImageType } from 'helpers/thumbnailSelector';
import { shallow, mount } from 'enzyme';
import { MenuToggler } from './CardDetail/index.style';

describe('<AssetCard />', () => {
  it('Asset Card Snapshot on click test', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(
      <AssetCard
        clicked={mockCallBack}
        cardWidth={250}
        status={{ caption: 'In Progress', color: 'green' }}
        version={1}
        thumbnailType={FixImageType}
        thumbnail={{ thumbnailSrc: cardImage }}
        duration="12:00"
        size="16 MB"
        commentsCount={6}
        assetName="Day10-month 12-halllow"
        assetExtension="mp4"
        uploader="Emily Parkson"
        fileUploadDate={1553277015000}
      />
    );
    wrapper.simulate('mousedown');
    expect(mockCallBack).toHaveBeenCalled();
  });
  it('Asset Card Snapshot test with label', () => {
    const tree = renderer
      .create(
        <AssetCard
          clicked={console.log}
          cardWidth={250}
          status={{ caption: 'In Progress', color: 'green' }}
          version={1}
          thumbnailType={FixImageType}
          thumbnail={{ thumbnailSrc: cardImage }}
          duration="12:00"
          size="16 MB"
          commentsCount={6}
          assetName="Day10-month 12-halllow"
          assetExtension="mp4"
          uploader="Emily Parkson"
          fileUploadDate={1553277015000}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Asset Card Snapshot test without label', () => {
    const tree = renderer
      .create(
        <AssetCard
          clicked={console.log}
          cardWidth={250}
          thumbnailType={FixImageType}
          version={3}
          thumbnail={{ thumbnailSrc: cardImage }}
          duration="12:00"
          size="16 MB"
          commentsCount={6}
          assetName="Day10-month 12-halllow"
          assetExtension="mp4"
          uploader="Emily Parkson"
          fileUploadDate={1553277015000}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Asset Card Snapshot test selected', () => {
    const tree = renderer
      .create(
        <AssetCard
          clicked={console.log}
          selected
          cardWidth={250}
          thumbnailType={FixImageType}
          thumbnail={{ thumbnailSrc: cardImage }}
          duration="12:00"
          size="16 MB"
          commentsCount={6}
          assetName="Day10-month 12-halllow"
          assetExtension="mp4"
          uploader="Emily Parkson"
          fileUploadDate={1553277015000}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
