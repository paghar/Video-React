//@flow
import React from 'react'
import {
  Wrapper,
  Title,
  ProgressBarRow,
  ProgressBar,
  DescriptionRow,
  TryAgainBtn,
  InfoText,
  CloseBtn,
} from './index.style'
import { Generals } from 'theme/colors'
import { Display1M, Display6, Display5 } from 'theme/fonts'
import Typography from 'components/shared/Typography'

type Props = {
  backgroundColor: string,
  width: string,
  uploadedSize: string,
  totalUploadedSize: string,
  uploadedFiles: string,
  totalFiles: string,
  percent: string,
  isFailed?: boolean,
  tryAgainClicked?: () => void,
  cancelClicked?: () => void,
  className?: string,
}

function PopupUploadFiles({
  backgroundColor,
  width,
  uploadedSize,
  totalUploadedSize,
  uploadedFiles,
  totalFiles,
  percent,
  isFailed,
  tryAgainClicked,
  cancelClicked,
  className,
}: Props) {
  return (
    <Wrapper
      backgroundColor={backgroundColor}
      width={width}
      className={className}
    >
      <Title font={Display1M} color={Generals.viii}>
        {isFailed ? 'upload failed' : `uplouding ${totalFiles} files`}
      </Title>
      <ProgressBarRow>
        <ProgressBar isFailed={isFailed} progressBarWith={percent}>
          <span></span>
        </ProgressBar>
        <CloseBtn
          rtl
          backgroundColor={Generals.v}
          hoverBackgroundColor={Generals.iv}
          activeBackgroundColor={Generals.iv}
          radius="50%"
          paddingRight="0px"
          icon="61453"
          iconSize="8px"
          iconColor="#b7b7cc"
          clicked={cancelClicked}
        />
      </ProgressBarRow>
      <DescriptionRow>
        {isFailed && (
          <TryAgainBtn
            backgroundColor={Generals.v}
            hoverBackgroundColor={Generals.iv}
            activeBackgroundColor={Generals.iv}
            radius="20px"
            spacing="4.8px"
            clicked={tryAgainClicked}
          >
            <Typography font={Display6} color={Generals.x} hoverable>
              Try Again
            </Typography>
          </TryAgainBtn>
        )}
        <InfoText font={Display5} color={Generals.vii} hoverable>
          {uploadedSize} of {totalUploadedSize} used ,
        </InfoText>
        <InfoText font={Display5} color={Generals.vii} hoverable>
          {uploadedFiles} of {totalFiles} File, {percent}%
        </InfoText>
      </DescriptionRow>
    </Wrapper>
  )
}

export default PopupUploadFiles
