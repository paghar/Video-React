//@flow
import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import VideoSequences from '.';
import sequencesImage from 'assets/image/thumb_scrub.jpg';

describe('<AssetCardUnknownThumbnail />', () => {
  it('VideoSequences Thumbnail Snapshot test when there is no mouse hover', () => {
    const tree = renderer
      .create(
        <VideoSequences
          sequencesSrc={sequencesImage}
          sequencesCount={50}
          sequenceSize={{ width: 240, height: 135 }}
          width={250}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('VideoSequences Thumbnail Snapshot test when there is mouse hover on (30,0)', () => {
    const wrapper = mount(
      <VideoSequences
        sequencesSrc={sequencesImage}
        sequencesCount={50}
        sequenceSize={{ width: 240, height: 135 }}
        width={250}
      />
    );
    wrapper.simulate('mousemove', {
      pageX: 30,
    });
    expect(wrapper).toMatchSnapshot();
    wrapper.simulate('mouseout');
    expect(wrapper).toMatchSnapshot();
  });
});
