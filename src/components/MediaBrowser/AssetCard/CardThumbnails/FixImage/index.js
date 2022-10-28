//@flow
import React from 'react';
import { ThumbnailImg } from './index.style';

type Props = {
  thumbnailSrc: string,
  className?: string,
};

const FixImageThumbnail = ({ className, thumbnailSrc }: Props) => {
  return <ThumbnailImg className={className} src={thumbnailSrc} />;
};

export default FixImageThumbnail;
