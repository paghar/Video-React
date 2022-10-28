import FixImage from 'components/MediaBrowser/AssetCard/CardThumbnails/FixImage';
import Unknown from 'components/MediaBrowser/AssetCard/CardThumbnails/Unknown';
import VideoSequences from 'components/MediaBrowser/AssetCard/CardThumbnails/VideoSequences';

export const FixImageType = 'FixImageType';
export const UnknownType = 'UnknownType';
export const VideoSequencesType = 'VideoSequenceType';

export const selectThumbnailComponent = thumbnailType => {
  switch (thumbnailType) {
    case FixImageType:
      return FixImage;
    case UnknownType:
      return Unknown;
    case VideoSequencesType:
      return VideoSequences;
    default:
      return Unknown;
  }
};
