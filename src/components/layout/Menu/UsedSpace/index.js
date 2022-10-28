//@flow
import React from 'react';
import { LinkDiv, UsedSpaceText } from './index.style';
import { Display3 } from 'theme/fonts';
import { Generals } from 'theme/colors';

type Props = {
  totalSpace: string,
  usedSpace: string,
  className?: string,
};

function usedSpace({ usedSpace, totalSpace, className }: Props) {
  return (
    <div className={className}>
      <UsedSpaceText font={Display3} color={Generals.viii} hoverable>
        {usedSpace} GB of {totalSpace} GB used
      </UsedSpaceText>

      <LinkDiv font={Display3} color={Generals.vi} hoverable>
        Upgrade Now
      </LinkDiv>
    </div>
  );
}

export default usedSpace;
