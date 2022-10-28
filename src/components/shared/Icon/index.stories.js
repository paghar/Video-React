import React from 'react';
import { Secondary } from 'theme/colors';
import Story from '.';

export default { title: 'Icon' };
export const IconWithFontSize20px = () => (
  <Story fontSize="20px" color={Secondary.iii} iconNumber="61449"></Story>
);
export const IconWithDeferentColor = () => (
  <Story fontSize="12px" color={Secondary.iv} iconNumber="61614"></Story>
);

export const IconWithHover = () => (
  <Story
    fontSize="24px"
    color={Secondary.iv}
    hoverColor={Secondary.iii}
    iconNumber="61614"
  ></Story>
);

export const IconIsNotSelectable = () => (
  <Story
    fontSize="24px"
    color={Secondary.iv}
    hoverColor={Secondary.iii}
    iconNumber="61614"
    selectable={true}
  ></Story>
);
