//@flow
import React from 'react';
import { selectThumbnailComponent } from 'helpers/thumbnailSelector';

type Props = {
  className?: string,
  thumbnailType: string,
  thumbnailProps: any,
};

const CardThumbnails = ({
  className,
  thumbnailType,
  thumbnailProps,
}: Props) => {
  const ThumbnailComponent = selectThumbnailComponent(thumbnailType);
  return <ThumbnailComponent {...thumbnailProps} className={className} />;
};

export default CardThumbnails;
