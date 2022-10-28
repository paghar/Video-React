//@flow
import React from 'react';
import { IconSpan } from './index.style';

type Props = {
  iconNumber: number,
  fontSize: string,
  color: string,
  hoverColor?: string,
  selectable?: boolean,
  clicked?: () => void,
  className?: string,
};

function Icon({
  fontSize,
  color,
  iconNumber,
  hoverColor,
  selectable,
  clicked,
  className,
}: Props) {
  return (
    <IconSpan
      fontSize={fontSize}
      iconColor={color}
      hoverColor={hoverColor}
      selectable={selectable}
      className={className}
      onClick={clicked}
    >
      {String.fromCharCode(parseInt(iconNumber))}
    </IconSpan>
  );
}

export default Icon;
