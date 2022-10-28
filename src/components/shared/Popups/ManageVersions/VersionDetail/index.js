//@flow
import React from 'react';
import { Wrapper, Image, Version, Details, CloseBtn } from './index.style';
import Typography from 'components/shared/Typography';
import { Display1M, Display3, Display2 } from 'theme/fonts';
import { Generals } from 'theme/colors';

export type versionsListType = {
  id: number,
  versionNumber: string,
  thumbnailUrl: string,
  assetName: string,
  assetDetail: string,
};

type Props = {
  id: number,
  versionNumber: string,
  thumbnailUrl: string,
  assetName: string,
  assetDetail: string,
  className?: string,
  closeClicked: () => void,
};

function VersionDetail({
  id,
  versionNumber,
  thumbnailUrl,
  assetName,
  assetDetail,
  closeClicked,
  className,
}: Props) {
  return (
    <Wrapper className={className}>
      <Version font={Display1M} color={Generals.vii} hoverable>
        {versionNumber}
      </Version>
      <Image src={thumbnailUrl} />
      <Details>
        <Typography font={Display3} color={Generals.v} hoverable>
          {assetName}
        </Typography>
        <Typography font={Display2} color={Generals.vii} hoverable>
          {assetDetail}
        </Typography>
      </Details>

      <CloseBtn
        rtl
        backgroundColor={Generals.viii}
        radius="50%"
        paddingRight="0px"
        icon="61453"
        iconSize="12px"
        iconColor={Generals.vii}
        width="12px"
        clicked={closeClicked}
      />
    </Wrapper>
  );
}

export default VersionDetail;
