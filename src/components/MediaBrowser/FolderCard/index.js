//@flow
import React from 'react';
import FolderCardListView from 'components/MediaBrowser/FolderCard/FolderCardListView';
import { Display2, Display1 } from 'theme/fonts';
import { Generals } from 'theme/colors';
import {
  FolderWrapper,
  Thumbnail,
  Numbers,
  More,
  FolderName,
  ImageWrapper,
  FileNumber,
  FolderInfo,
  FileCountWrapper,
  LastThumbnailWrapper,
  DropLayer,
  DropLayerAddIcon,
  DropLayerCaption,
  Wrapper,
} from './index.style';

export type FolderCardType = {
  selected?: boolean,
  thumbnails: Array<string>,
  fileCount: number,
  uploader: string,
  size?: string,
  uploadDate: number,
  name: string,
  expanded?: boolean,
};

type Props = {
  isDraggingOver?: boolean,
  dragging?: boolean,
  width: number,
  className?: string,
  clicked: (event: SyntheticMouseEvent<HTMLInputElement>) => void,
};

const FolderCard = ({
  thumbnails,
  uploadDate,
  expanded,
  fileCount,
  name,
  className,
  width,
  uploader,
  size,
  selected,
  clicked,
  isDraggingOver,
  dragging,
}: Props & FolderCardType) => {
  return (
    <Wrapper
      onMouseDown={clicked}
      width={width}
      expanded={expanded}
      selected={selected}
      className={className}
      isDraggingOver={isDraggingOver}
      dragging={dragging}
    >
      <DropLayer dragging={dragging} expanded={expanded}>
        <DropLayerAddIcon
          fontSize="35px"
          color={Generals.viii}
          iconNumber="61543"
        />
        <DropLayerCaption font={Display2} hoverable color={Generals.viii}>
          Add to Folder
        </DropLayerCaption>
      </DropLayer>
      <FolderWrapper
        isDraggingOver={isDraggingOver}
        expanded={expanded}
        width={width}
        fileCount={fileCount}
        selected={selected}
      >
        {!expanded && (
          <ImageWrapper>
            {thumbnails.slice(0, 4).map((thumbnail, id) => {
              return (
                <Thumbnail key={id} fileCount={fileCount} src={thumbnail} />
              );
            })}
            {fileCount >= 5 && (
              <LastThumbnailWrapper>
                {thumbnails.length > 4 && (
                  <Thumbnail
                    key={5}
                    fileCount={fileCount}
                    src={thumbnails[4]}
                  />
                )}
                {fileCount > 5 && (
                  <Numbers
                    hoverable
                    fileCount={fileCount}
                    font={Display1}
                    color={Generals.viii}
                  />
                )}
              </LastThumbnailWrapper>
            )}
          </ImageWrapper>
        )}

        {!expanded && (
          <FolderInfo>
            <FolderName hoverable font={Display2} color={Generals.viii}>
              {name}
            </FolderName>
            <FileCountWrapper>
              <FileNumber hoverable font={Display2} color={Generals.vii}>
                {fileCount} files
              </FileNumber>
              <More
                backgroundColor="transparent"
                hoverBackgroundColor="transparent"
                hoverColor={Generals.vii}
                radius="0px"
                iconSize="12px"
                icon="61762"
                spacing="0"
                width="auto"
                height="auto"
                iconColor={Generals.vii}
                hoverIconColor={Generals.vii}
              />
            </FileCountWrapper>
          </FolderInfo>
        )}
      </FolderWrapper>
      {expanded && (
        <FolderCardListView
          dragging={dragging}
          selected={selected}
          name={name}
          fileCount={fileCount}
          uploader={uploader}
          size={size}
          uploadDate={uploadDate}
        />
      )}
    </Wrapper>
  );
};

FolderCard.defaultProps = {
  name: '',
  fileCount: 0,
  thumbnails: [],
  uploader: '',
  uploadDate: 0,
  size: '',
};

export default FolderCard;
