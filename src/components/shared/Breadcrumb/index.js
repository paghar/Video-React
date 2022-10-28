//@flow
import React from 'react';
import { BreadcrumbWrapper, BreadcrumbItem, StyledIcon } from './index.style';
import Typography from 'components/shared/Typography';
import { Display1 } from 'theme/fonts';
import { Generals } from 'theme/colors';
type Props = {
  clicked: (id: number) => void,
  items: Array<string>,
  className?: string,
};
const Breadcrumb = ({ items, clicked, className }: Props) => {
  const listItems = items.map((name, id) => (
    <BreadcrumbItem key={id} onClick={() => clicked(id)}>
      {id > 0 && (
        <StyledIcon fontSize="11px" color={Generals.vi} iconNumber={61524} />
      )}
      <Typography font={Display1} color={Generals.vi}>
        {name}
      </Typography>
    </BreadcrumbItem>
  ));
  return (
    <BreadcrumbWrapper className={className}>{listItems}</BreadcrumbWrapper>
  );
};
export default Breadcrumb;
