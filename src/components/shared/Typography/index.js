//@flow
import { Wrapper } from './index.style';
import React from 'react';
type Font = {
  fontSize: Object | string,
  fontName: Object | string,
  fontWeight: Object | string,
  lineHeight: Object | string,
};
type Props = {
  font: Font,
  color?: Object | string,
  hoverable?: boolean,
  children: string,
  className?: string,
};
const Typography = ({
  font: { fontName, fontSize, fontWeight, lineHeight },
  color,
  hoverable,
  children,
  className,
}: Props) => {
  return (
    <Wrapper
      fontName={fontName}
      sizing={fontSize}
      weight={fontWeight}
      lineHeight={lineHeight}
      textColor={color}
      hoverable={hoverable}
      className={className}
    >
      {children}
    </Wrapper>
  );
};

export default Typography;
