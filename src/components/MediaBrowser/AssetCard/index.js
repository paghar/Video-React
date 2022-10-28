//@flow
import React from 'react';
import CardListView from 'components/MediaBrowser/AssetCard/CardListView';
import {
  Wrapper,
  StyledCardThumbnail,
  StyledCardDetail,
  CardStatusLabel,
  CardVersionLabel,
  DropLayer,
  DropLayerAddIcon,
  DropLayerCaption,
  WrapperAsset,
} from './index.style';
import { Display2 } from 'theme/fonts';
import { Generals } from 'theme/colors';
import { UnknownType } from 'helpers/thumbnailSelector';

type Label = {
  caption: string,
  color: string,
};

export type AssetCardType = {
  status?: Label,
  dragging?: boolean,
  isDraggingOver?: boolean,
  version?: number,
  thumbnailType: string,
  thumbnail?: any,
  duration?: string,
  size: string,
  commentsCount?: number,
  assetName: string,
  selected?: boolean,
  expanded?: boolean,
  assetExtension: string,
  uploader: string,
  fileUploadDate: number,
};

type Props = {
  className?: string,
  cardWidth: number,
  clicked: (event: SyntheticMouseEvent<HTMLInputElement>) => void,
};

const AssetCard = ({
  cardWidth,
  dragging,
  isDraggingOver,
  status,
  version,
  thumbnailType,
  thumbnail,
  duration,
  size,
  commentsCount,
  assetName,
  selected,
  assetExtension,
  expanded,
  fileUploadDate,
  uploader,
  className,
  clicked,
}: Props & AssetCardType) => {
  return (
    <WrapperAsset
      expanded={expanded}
      width={cardWidth}
      selected={selected}
      dragging={dragging}
      className={className}
      onMouseDown={clicked}
      isDraggingOver={isDraggingOver}
      dragging={dragging}
    >
      <DropLayer dragging={dragging}>
        <DropLayerAddIcon
          fontSize="35px"
          color={Generals.viii}
          iconNumber="61543"
        />
        <DropLayerCaption font={Display2} hoverable color={Generals.viii}>
          Add a version
        </DropLayerCaption>
      </DropLayer>

      <Wrapper
        expanded={expanded}
        width={cardWidth}
        selected={selected}
        isDraggingOver={isDraggingOver}
      >
        {status && !expanded && (
          <CardStatusLabel
            labelCaption={status.caption}
            labelColor={status.color}
          />
        )}
        {version && version > 1 && !expanded && (
          <CardVersionLabel labelCaption={`v${version}`} />
        )}
        <StyledCardThumbnail
          expanded={expanded}
          width={cardWidth}
          thumbnailType={thumbnailType}
          thumbnailProps={{ ...thumbnail, width: cardWidth, expanded }}
        />
        {!expanded && (
          <StyledCardDetail
            width={cardWidth}
            assetExtension={assetExtension}
            duration={duration}
            size={size}
            commentsCount={commentsCount}
            assetName={assetName}
          />
        )}
      </Wrapper>
      {expanded && (
        <CardListView
          size={size}
          commentsCount={commentsCount}
          selected={selected}
          assetName={assetName}
          assetExtension={assetExtension}
          version={version}
          uploader={uploader}
          duration={duration}
          fileUploadDate={fileUploadDate}
          status={status}
          dragging={dragging}
        />
      )}
    </WrapperAsset>
  );
};

AssetCard.defaultProps = {
  thumbnailType: UnknownType,
  size: '-',
  assetName: '',
  assetExtension: '',
  fileUploadDate: 0,
  uploader: '',
};

export default AssetCard;
