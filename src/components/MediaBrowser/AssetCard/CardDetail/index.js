//@flow
import React from 'react';
import {
  DetailWrapper,
  AssetDuration,
  AssetSize,
  CommentsNumber,
  TopWrapper,
  BottomWrapper,
  MenuToggler,
  AssetTitle,
  AssetFormatExtension,
} from './index.style';
import Typography from 'components/shared/Typography';
import { Display2, Display4 } from 'theme/fonts';
import { Generals } from 'theme/colors';

type Props = {
  assetName: string,
  duration?: string,
  size: string,
  commentsCount?: number,
  assetExtension: string,
  className?: string,
};

const CardThumbnail = ({
  assetName,
  duration,
  size,
  commentsCount,
  className,
  assetExtension,
}: Props) => {
  return (
    <DetailWrapper className={className}>
      <TopWrapper>
        <AssetTitle font={Display2} color={Generals.viii} hoverable>
          {assetName}
        </AssetTitle>
        <AssetFormatExtension font={Display2} color={Generals.viii} hoverable>
          .{assetExtension}
        </AssetFormatExtension>
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
        />
      </TopWrapper>
      <BottomWrapper>
        {duration && (
          <AssetDuration font={Display4} color={Generals.vii} hoverable>
            {duration}
          </AssetDuration>
        )}
        <AssetSize font={Display4} color={Generals.vii} hoverable>
          {size}
        </AssetSize>
        {commentsCount && (
          <CommentsNumber
            backgroundColor="transparent"
            hoverBackgroundColor="transparent"
            hoverColor={Generals.vii}
            radius="0px"
            iconSize="12px"
            icon="61557"
            spacing="4px"
            width="auto"
            height="auto"
            iconColor={Generals.vii}
            hoverIconColor={Generals.vii}
          >
            <Typography font={Display4} color={Generals.vii} hoverable>
              {commentsCount.toString()}
            </Typography>
          </CommentsNumber>
        )}
      </BottomWrapper>
    </DetailWrapper>
  );
};

export default CardThumbnail;
