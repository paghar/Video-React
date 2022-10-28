//@flow
import React from 'react';
import Typography from 'components/shared/Typography';
import { Display4 } from 'theme/fonts';
import { Generals } from 'theme/colors';
import { DetailWrapper } from './index.style';
const Details = () => {
  return (
    <DetailWrapper>
      <Typography font={Display4} hoverable color={Generals.vi}>
        Details
      </Typography>
    </DetailWrapper>
  );
};

export default Details;
