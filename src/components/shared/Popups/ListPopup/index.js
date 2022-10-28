//@flow
import React from 'react';
import {
  PopupBox,
  PopupItem,
  IconItem,
  Line,
  SubIcon,
  Sublist,
  ItemWrapper,
} from './index.style';
import { POP_UP_LINE, POP_UP_HAS_SUBITEMS } from 'constants/variables';
import Typography from 'components/shared/Typography';

// itemType  => null:text , hr:line , subItem:have sub items
export type PopupItemType = {
  id: number,
  itemType?: string,
  icon?: string,
  title: string,
  iconColor?: string,
  children: Array<PopupItemType>,
};

type Props = {
  popupItems: Array<PopupItemType>,
  backgroundColor: string,
  width: string,
  height: string,
  borderRadius: string,
  font: Object,
  color: string,
  hoverColor: string,
  hoverBackgroundColor: string,
  iconSize?: string,
  clicked: (item: PopupItemType) => void,
  className?: string,
};
const SimplePopup = ({
  popupItems,
  backgroundColor,
  width,
  height,
  borderRadius,
  font,
  color,
  hoverColor,
  hoverBackgroundColor,
  iconSize,
  clicked,
  className,
}: Props) => {
  return (
    <PopupBox
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      borderRadius={borderRadius}
      className={className}
    >
      {popupItems.map(item => {
        const { id, itemType, icon, title, iconColor, children } = item;
        return itemType == POP_UP_LINE ? (
          <Line key={id}></Line>
        ) : (
          <ItemWrapper key={id}>
            <PopupItem
              onClick={() => clicked(item)}
              hoverColor={hoverColor}
              hoverColorIcon={iconColor || hoverColor}
              hoverBackgroundColor={hoverBackgroundColor}
            >
              {icon && (
                <IconItem
                  fontSize={iconSize}
                  color={iconColor || color}
                  iconNumber={icon}
                ></IconItem>
              )}
              <Typography font={font} color={color}>
                {title}
              </Typography>
              {itemType == POP_UP_HAS_SUBITEMS && (
                <SubIcon
                  fontSize={iconSize}
                  color={color}
                  iconNumber="61524"
                ></SubIcon>
              )}
            </PopupItem>
            {itemType == POP_UP_HAS_SUBITEMS && (
              <Sublist>
                <SimplePopup
                  popupItems={children}
                  backgroundColor={backgroundColor}
                  width="121px"
                  height="199px"
                  borderRadius="7px"
                  font={font}
                  color={color}
                  hoverColor={hoverColor}
                  hoverBackgroundColor={hoverBackgroundColor}
                  clicked={clicked}
                />
              </Sublist>
            )}
          </ItemWrapper>
        );
      })}
    </PopupBox>
  );
};

export default SimplePopup;
