//@flow
import React from 'react';
import { LabelWrapper, LabelCaption } from './index.style';
import { Generals } from 'theme/colors';
import { Display6 } from 'theme/fonts';

type Props = {
  labelCaption: string,
  labelColor?: string,
  className?: string,
};

const CardLabel = ({ className, labelCaption, labelColor }: Props) => {
  return (
    <LabelWrapper className={className} haveColor={!!labelColor}>
      <LabelCaption
        font={Display6}
        color={Generals.viii}
        hoverable
        labelColor={labelColor}
      >
        {labelCaption}
      </LabelCaption>
    </LabelWrapper>
  );
};

export default CardLabel;
