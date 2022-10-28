//@flow
import React from 'react';
import Typography from 'components/shared/Typography';
import ThumbnailView from 'components/shared/Button';
import { SortBtn, OptionBarWrapper } from './index.style';
import { Generals } from 'theme/colors';
import { Display2 } from 'theme/fonts';

type Props = {
  fileNumber: string,
  fileSize: string,
  clicked?: () => void,
};

function OptionBar({ clicked, fileNumber, fileSize }: Props) {
  return (
    <OptionBarWrapper>
      <Typography font={Display2} color={Generals.vi}>
        {`${fileNumber} Files, ${fileSize}`}
      </Typography>

      <SortBtn
        rtl
        backgroundColor={Generals.ii}
        hoverColor={Generals.viii}
        icon="61703"
        iconColor={Generals.vii}
        spacing="4.8px"
        iconSize="16px"
        width="65px"
        height="29px"
      >
        <Typography font={Display2} color={Generals.vii}>
          Name
        </Typography>
      </SortBtn>

      <ThumbnailView
        clicked={clicked}
        hoverColor={Generals.viii}
        backgroundColor={Generals.ii}
        icon="61497"
        iconSize="16px"
        iconColor={Generals.vii}
      />
    </OptionBarWrapper>
  );
}

export default OptionBar;
