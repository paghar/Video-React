//@flow
import * as React from 'react';
import { StyledButton, StyledIcon } from './index.style';
type Props = {
  children?: React.Node,
  rtl?: boolean,
  spacing?: string,
  backgroundColor: string,
  width?: string,
  height?: string,
  radius?: string,
  hoverBackgroundColor?: string,
  hoverColor?: string,
  activeBackgroundColor?: string,
  iconColor?: string,
  hoverIconColor?: string,
  iconSize?: string,
  clicked?: () => void,
  icon?: string,
  className?: string,
};
const Button = ({
  icon,
  spacing,
  iconColor,
  children,
  iconSize,
  rtl,
  backgroundColor,
  width,
  height,
  radius,
  hoverBackgroundColor,
  activeBackgroundColor,
  hoverColor,
  clicked,
  className,
}: Props) => {
  return (
    <StyledButton
      rtl={rtl}
      onClick={clicked}
      activeBackgroundColor={activeBackgroundColor}
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
      width={width}
      height={height}
      radius={radius}
      hoverBackgroundColor={hoverBackgroundColor}
      className={className}
    >
      <StyledIcon
        rtl={rtl}
        color={iconColor}
        fontSize={iconSize}
        spacing={spacing}
        hoverColor={hoverColor}
        iconNumber={icon}
      />
      {children}
    </StyledButton>
  );
};
export default Button;
