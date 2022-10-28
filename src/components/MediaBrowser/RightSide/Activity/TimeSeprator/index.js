//@flow
import React from 'react';
import { getShortDate } from 'helpers/time';
import { Time } from './index.style';
import { Display4 } from 'theme/fonts';
import { Generals } from 'theme/colors';
type Props = {
  time: number,
  className?: string,
};
const oneDay = 1000 * 60 * 60 * 24;
const TimeSeprator = ({ time, className }: Props) => {
  let today = new Date().setHours(0);
  today = new Date(today).setMinutes(0);
  today = new Date(today).setSeconds(0);
  const diff = parseInt(time - today);
  return (
    <Time className={className} font={Display4} hoverable color={Generals.vii}>
      {diff < oneDay && diff > 0
        ? 'Today'
        : diff < 0 && diff > -oneDay
        ? 'Yesterday'
        : getShortDate(time)}
    </Time>
  );
};

export default TimeSeprator;
