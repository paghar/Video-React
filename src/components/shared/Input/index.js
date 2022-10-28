//@flow
import React from 'react';
import { StyledInput, StyledSpan, StyledDiv } from './index.style';
type Font = {
  fontSize: Object | string,
  fontName: Object | string,
  fontWeight: Object | string,
  lineHeight: Object | string,
};
type Props = {
  font: Font,
  rtl?: boolean,
  changed?: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  focused?: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  iconClicked?: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  blured?: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  width?: string,
  height?: string,
  borderRadius: string,
  textColor: string,
  backgroundColor: string,
  hoverBackgroundColor?: string,
  placeHolderColor?: string,
  placeholder: string,
  icon?: string,
  iconColor?: string,
  iconSize?: string,
  paddingRL: string,
  className?: string,
  value?: string,
};
const Input = ({
  font: { fontName, fontSize, fontWeight, lineHeight },
  rtl,
  width,
  height,
  changed,
  focused,
  iconClicked,
  blured,
  borderRadius,
  textColor,
  backgroundColor,
  hoverBackgroundColor,
  placeHolderColor,
  placeholder,
  icon,
  iconColor,
  iconSize,
  paddingRL,
  className,
  value,
}: Props) => {
  return (
    <StyledDiv
      rtl={rtl}
      height={height}
      width={width}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      hoverBackgroundColor={hoverBackgroundColor}
      fontName={fontName}
      sizing={fontSize}
      paddingRL={paddingRL}
      weight={fontWeight}
      lineHeight={lineHeight}
      className={className}
    >
      <StyledInput
        textColor={textColor}
        rtl={rtl}
        onChange={changed}
        onFocus={focused}
        onBlur={blured}
        placeHolderColor={placeHolderColor}
        placeholder={placeholder}
        iconSize={iconSize}
        value={value}
      />
      <StyledSpan
        paddingRL={paddingRL}
        rtl={rtl}
        fontSize={iconSize}
        color={iconColor}
        clicked={iconClicked}
        iconNumber={icon}
      />
    </StyledDiv>
  );
};
export default Input;
