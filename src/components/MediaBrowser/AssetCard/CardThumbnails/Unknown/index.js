//@flow
import React from 'react';
import { UnknownFileThumbnail } from './index.style';
import { Generals } from 'theme/colors';
import { hexToRgb } from 'helpers';

type Props = {
  className?: string,
};

const UnknownThumbnail = ({ className }: Props) => {
  return (
    <UnknownFileThumbnail
      className={className}
      backgroundColor={hexToRgb(Generals.iii, 0.2)}
      activeBackgroundColor="transparent"
      icon="61787"
      iconSize="40px"
      iconColor={Generals.ii}
    />
  );
};

export default UnknownThumbnail;
