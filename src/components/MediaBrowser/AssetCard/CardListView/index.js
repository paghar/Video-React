//@flow
import React from 'react';
import { Generals } from 'theme/colors';
import { Display5, Display2 } from 'theme/fonts';
import { getListViewDate } from 'helpers/time';
import {
  ItemWrapper,
  FileNameWrapper,
  FileNameText,
  ToggleMenu,
  StyledIcon,
  FileDialogs,
  FileNameExtensionLabel,
  CardStatusLabel,
  CardVersionLabel,
  FileUploader,
  FileSize,
  FileDurationWrapper,
  FileDate,
  FileStatus,
  FileDialogNumLabel,
  Duration,
} from './index.style';

type Label = {
  caption: string,
  color: string,
};

type Props = {
  className?: string,
  status?: Label,
  version?: number,
  duration?: string,
  size: string,
  commentsCount?: number,
  assetName: string,
  selected?: boolean,
  assetExtension: string,
  uploader: string,
  fileUploadDate: number,
};

const CardListView = ({
  status,
  version,
  duration,
  size,
  commentsCount,
  assetName,
  selected,
  assetExtension,

  fileUploadDate,
  uploader,
  className,
}: Props) => {
  return (
    <ItemWrapper>
      <FileNameWrapper>
        <FileNameText selected={selected} color={Generals.vii} font={Display2}>
          {assetName}
        </FileNameText>
        <FileNameExtensionLabel
          selected={selected}
          color={Generals.vii}
          font={Display2}
        >
          .{assetExtension}
        </FileNameExtensionLabel>

        {version && version > 1 && (
          <CardVersionLabel labelCaption={`v${version}`} />
        )}
      </FileNameWrapper>

      <FileUploader selected={selected} color={Generals.vi} font={Display5}>
        {uploader}
      </FileUploader>
      <FileDialogs>
        {commentsCount ? (
          <StyledIcon
            selected={selected}
            fontSize="12px"
            color={Generals.vi}
            hoverColor={Generals.vii}
            iconNumber={62074}
          />
        ) : (
          <StyledIcon
            selected={selected}
            fontSize="12px"
            color={Generals.vi}
            hoverColor={Generals.vii}
            iconNumber={62161}
          />
        )}
        <FileDialogNumLabel
          selected={selected}
          color={Generals.vi}
          font={Display5}
        >
          {commentsCount}
        </FileDialogNumLabel>
      </FileDialogs>
      <FileSize selected={selected} color={Generals.vi} font={Display5}>
        {size}
      </FileSize>
      <FileDurationWrapper>
        {duration ? (
          <Duration selected={selected} color={Generals.vi} font={Display5}>
            {duration}
          </Duration>
        ) : (
          <StyledIcon
            selected={selected}
            fontSize="12px"
            color={Generals.vi}
            hoverColor={Generals.vii}
            iconNumber={62161}
          />
        )}
      </FileDurationWrapper>

      <FileDate selected={selected} color={Generals.vi} font={Display5}>
        {getListViewDate(fileUploadDate)}
      </FileDate>
      <FileStatus>
        {status ? (
          <CardStatusLabel
            labelCaption={status.caption}
            labelColor={status.color}
          />
        ) : (
          <StyledIcon
            selected={selected}
            fontSize="12px"
            color={Generals.vi}
            hoverColor={Generals.vii}
            iconNumber={62161}
          />
        )}
      </FileStatus>
      <ToggleMenu
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

export default CardListView;
