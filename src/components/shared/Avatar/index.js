//@flow
import React from 'react';
import { AvatarBtn } from './index.style';
import Typography from 'components/shared/Typography';

type Props = {
  backgroundColor: string,
  imgUrl?: string,
  isBorder?: boolean,
  children: string,
  width: string,
  height: string,
  borderRadius: string,
  font: Object,
  color: string,
  avatarClick?: () => void,
  className?: string,
};

function Avatar({
  backgroundColor,
  imgUrl,
  isBorder,
  children,
  width,
  height,
  borderRadius,
  font,
  color,
  avatarClick,
  className,
}: Props) {
  return (
    <AvatarBtn
      backgroundColor={backgroundColor}
      imgUrl={imgUrl}
      isBorder={isBorder}
      width={width}
      height={height}
      borderRadius={borderRadius}
      onClick={avatarClick}
      className={className}
    >
      {!imgUrl && (
        <Typography font={font} color={color} hoverable>
          {children}
        </Typography>
      )}
    </AvatarBtn>
  );
}

export default Avatar;
