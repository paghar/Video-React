//@flow
import React from 'react';
import AssetCard from '.';
import { action } from '@storybook/addon-actions';
import cardImage from 'assets/image/Colleagues_looking_at_information_on_mobile_phone_screen_Videos_Mixkit.png';
import {
  FixImageType,
  UnknownType,
  VideoSequencesType,
} from 'helpers/thumbnailSelector';
import sequencesImage from 'assets/image/thumb_scrub.jpg';
export default { title: 'Asset' };
export const AssetVideoSequense = () => (
  <AssetCard
    selected
    clicked={action('clicked')}
    cardWidth={250}
    status={{ caption: 'In Progress', color: 'green' }}
    version={5}
    thumbnailType={VideoSequencesType}
    thumbnail={{
      sequencesSrc: sequencesImage,
      sequencesCount: 50,
      sequenceSize: { width: 240, height: 135 },
    }}
    duration="12:00"
    size="16 MB"
    commentsCount={6}
    assetName="Day10-month 12-halllow"
    assetExtension="mp4"
    uploader="Emily Parkson"
    fileUploadDate={1553277015000}
  />
);

export const AssetFixedImag = () => (
  <AssetCard
    selected
    clicked={action('clicked')}
    cardWidth={250}
    status={{ caption: 'In Progress', color: 'green' }}
    version={2}
    thumbnailType={FixImageType}
    thumbnail={{ thumbnailSrc: cardImage }}
    size="16 MB"
    commentsCount={6}
    assetName="Day10-month 12-halllow"
    assetExtension="jpg"
    uploader="Emily Parkson"
    fileUploadDate={1553277015000}
  />
);
export const AssetUnknown = () => (
  <AssetCard
    clicked={action('clicked')}
    cardWidth={250}
    thumbnailType={UnknownType}
    status={{ caption: 'Rejected', color: 'red' }}
    duration="12:00"
    size="16 MB"
    commentsCount={6}
    assetName="Day10-month 12-halllow day-month 12-halllow day"
    assetExtension="pdf"
    uploader="Emily Parkson"
    fileUploadDate={1553277015000}
  />
);
export const AssetunknownType = () => (
  <AssetCard
    clicked={action('clicked')}
    cardWidth={250}
    thumbnailType={UnknownType}
    version={4}
    size="16 MB"
    commentsCount={6}
    selected
    assetName="Day10-month 12-halllow day-month 12-halllow day"
    assetExtension="pdf"
    uploader="Emily Parkson"
    fileUploadDate={1553277015000}
  />
);
export const AssetFixedImagEx = () => (
  <AssetCard
    clicked={action('clicked')}
    expanded
    cardWidth={250}
    status={{ caption: 'In Progress', color: 'green' }}
    version={2}
    thumbnailType={FixImageType}
    thumbnail={{ thumbnailSrc: cardImage }}
    size="16 MB"
    commentsCount={6}
    assetName="Day10-month 12-halllow"
    assetExtension="jpg"
    uploader="Emily Parkson"
    fileUploadDate={1553277015000}
  />
);
export const AssetUnknownEx = () => (
  <AssetCard
    expanded
    clicked={action('clicked')}
    cardWidth={250}
    thumbnailType={UnknownType}
    status={{ caption: 'Rejected', color: 'red' }}
    duration="12:00"
    size="16 MB"
    commentsCount={6}
    assetName="Day10-month 12-halllow day-month 12-halllow day"
    assetExtension="pdf"
    uploader="Emily Parksonasasxasxaxax"
    fileUploadDate={1553277015000}
  />
);
export const AssetUnknownEx0 = () => (
  <AssetCard
    clicked={action('clicked')}
    expanded
    cardWidth={250}
    thumbnailType={UnknownType}
    duration="12:00"
    size="16 MB"
    commentsCount={6}
    assetName="Day10-month 12-halllow day-month 12-halllow day"
    assetExtension="pdf"
    uploader="Emily Parksonasasxasxaxax"
    fileUploadDate={1553277015000}
  />
);
export const AssetunknownTypeEx1 = () => (
  <AssetCard
    clicked={action('clicked')}
    expanded
    cardWidth={250}
    thumbnailType={UnknownType}
    version={4}
    size="16 MB"
    commentsCount={6}
    selected
    assetName="Day10-month 12-halllow day-month 12-halllow day"
    assetExtension="pdf"
    uploader="Emily Parkson"
    fileUploadDate={1553277015000}
  />
);
export const AssetunknownTypeEx2 = () => (
  <AssetCard
    clicked={action('clicked')}
    expanded
    cardWidth={250}
    thumbnailType={UnknownType}
    version={4}
    size="16 MB"
    status={{ caption: 'Rejected', color: 'red' }}
    selected
    assetName="Day10-month 12-halllow day-month 12-halllow day"
    assetExtension="pdf"
    uploader="Emily Parkson"
    fileUploadDate={1553277015000}
  />
);
