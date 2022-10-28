//@flow
import React from 'react';
import {
  Wrapper,
  Title,
  Context,
  ButtonsWrapper,
  Image,
  ContextWrapper,
  Btn,
} from './index.style';
import { Display2, Display1M } from 'theme/fonts';
import { Generals } from 'theme/colors';
import Typography from 'components/shared/Typography';

const renderContext = (thumbnail, context) => {
  const { imgUrl, imgWidth } = thumbnail;
  return (
    <ContextWrapper hasThumbnail={!!imgUrl}>
      {imgUrl && <Image src={imgUrl} width={imgWidth} />}
      <Context hoverable font={Display2} color={Generals.v}>
        {context}
      </Context>
    </ContextWrapper>
  );
};

export type ButtonsType = {
  id: number,
  btnTitle: string,
  backgroundColor: string,
  hoverBackgroundColor: string,
  activeBackgroundColor: string,
  clicked: () => void,
  color: string,
  hoverColor: string,
  hasBorder?: string,
};

export type ThumbnailType = {
  imgUrl: string,
  imgWidth: string,
};

type Props = {
  backgroundColor: string,
  width: string,
  borderRadius: string,
  title?: string,
  context: string,
  buttons: Array<ButtonsType>,
  thumbnail: ThumbnailType,
  className?: string,
};

function ConfirmPopup({
  backgroundColor,
  width,
  borderRadius,
  title,
  context,
  buttons,
  thumbnail,
  className,
}: Props) {
  return (
    <Wrapper
      backgroundColor={backgroundColor}
      width={width}
      borderRadius={borderRadius}
      className={className}
    >
      {title && (
        <Title hoverable font={Display1M} color={Generals.ii}>
          {title}
        </Title>
      )}
      {renderContext(thumbnail, context)}
      <ButtonsWrapper>
        {buttons.map(button => {
          const {
            id,
            btnTitle,
            backgroundColor,
            hoverBackgroundColor,
            activeBackgroundColor,
            clicked,
            color,
            hoverColor,
            hasBorder,
          } = button;

          return (
            <Btn
              key={id}
              backgroundColor={backgroundColor}
              hoverBackgroundColor={hoverBackgroundColor}
              radius="5px"
              width="auto"
              activeBackgroundColor={activeBackgroundColor}
              clicked={clicked}
              hoverColor={hoverColor}
              hasBorder={hasBorder}
            >
              <Typography font={Display2} color={color} hoverable>
                {btnTitle}
              </Typography>
            </Btn>
          );
        })}
      </ButtonsWrapper>
    </Wrapper>
  );
}

export default ConfirmPopup;
