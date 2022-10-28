//@flow
import React from 'react';
import { Display2, Display5 } from 'theme/fonts';
import { Generals } from 'theme/colors';
import { getListViewDate } from 'helpers/time';
import {
  ItemWrapper,
  NameWrapper,
  FileNumberLabel,
  FolderNameLabel,
  FileDialogs,
  StyledIcon,
  MenuToggler,
  FileUploader,
  FileSize,
  FileDuration,
  FileDate,
  FileStatus,
  Duration,
} from './index.style';
type Props = {
  selected?: boolean,
  fileCount: number,
  name: string,
  uploadDate: number,
  uploader: string,
  size?: string,
  className?: string,
  dragging?: boolean,
};
const FolderCardListView = ({
  uploadDate,
  fileCount,
  name,
  className,
  uploader,
  size,
  selected,
  dragging,
}: Props) => {
  return (
    <ItemWrapper dragging={dragging}>
      <NameWrapper>
        <FolderNameLabel
          selected={selected}
          color={Generals.vii}
          font={Display2}
        >
          {name}
        </FolderNameLabel>
        <FileNumberLabel
          selected={selected}
          hoverable
          font={Display2}
          color={Generals.vi}
        >
          {fileCount} files
        </FileNumberLabel>
      </NameWrapper>
      <FileUploader selected={selected} color={Generals.vi} font={Display5}>
        {uploader}
      </FileUploader>
      <FileDialogs>
        <StyledIcon
          selected={selected}
          fontSize="12px"
          color={Generals.vi}
          hoverColor={Generals.vii}
          iconNumber={62161}
        />
      </FileDialogs>
      <FileSize selected={selected} color={Generals.vi} font={Display5}>
        {size}
      </FileSize>
      <FileDuration>
        <StyledIcon
          selected={selected}
          fontSize="12px"
          color={Generals.vi}
          hoverColor={Generals.vii}
          iconNumber={62161}
        />
      </FileDuration>

      <FileDate selected={selected} color={Generals.vi} font={Display5}>
        {getListViewDate(uploadDate)}
      </FileDate>
      <FileStatus>
        <StyledIcon
          selected={selected}
          fontSize="12px"
          color={Generals.vi}
          hoverColor={Generals.vii}
          iconNumber={62161}
        />
      </FileStatus>
      <MenuToggler
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
        selected={selected}
      />
    </ItemWrapper>
  );
};

export default FolderCardListView;
