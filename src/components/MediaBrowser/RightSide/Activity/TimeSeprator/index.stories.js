//@flow
import React from 'react';
import TimeSeprator from '.';

export default { title: 'TimeSeprator' };

export const time = () => <TimeSeprator time={1570963070000} />;
export const PastFriday = () => <TimeSeprator time={1570771290000} />;
export const LastYear = () => <TimeSeprator time={1543987290000} />;
