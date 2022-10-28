//@flow
import styled, { css } from 'styled-components';
import CardThumbnails from './CardThumbnails';
import CardDetail from './CardDetail';
import CardLabel from './CardLabel';
import { MenuToggler } from './CardDetail/index.style';
import { Primary, Generals } from 'theme/colors';
import {
  FileDate,
  StyledIcon,
  FileSize,
  FileUploader,
  FileDurationWrapper,
  ToggleMenu,
  FileDialogNumLabel,
  FileNameText,
  FileNameExtensionLabel,
} from './CardListView/index.style';

import Icon from 'components/shared/Icon';
import Typography from 'components/shared/Typography';
import { hexToRgb } from 'helpers';

export const DropLayerAddIcon = styled(Icon)`
  margin-top: -14px;
`;

export const DropLayerCaption = styled(Typography)`
  text-align: center;
  margin-top: 7px;
`;

export const DropLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 98%;
  z-index: 19;
  display: ${({ dragging }) => (dragging ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;

  background-color: ${({ dragging, ...props }) =>
    dragging
      ? hexToRgb(Generals.iv(props), 0.7)
      : hexToRgb(Primary.Dim(props), 0.28)};
  ${({ dragging }) =>
    dragging &&
    `
    ${DropLayerCaption} {
      display: none;
    }
    ${DropLayerAddIcon} {
      display: none;
    }

  `};
`;

export const StyledCardDetail = styled(CardDetail)`
  height: calc(100% - ${({ width }) => Math.ceil(width * 0.564)}px);
`;

export const Wrapper = styled.div`
  box-shadow: 0 0 0 3px
    ${({ selected, expanded }) =>
      selected && !expanded ? Primary.Light : 'transparent'};
  border-radius: ${({ expanded }) => (expanded ? '5px' : '7px')};
  width: ${({ expanded }) => (expanded ? '89px' : '100%')};
  height: ${({ width, expanded }) =>
    expanded ? '50px' : Math.ceil(width * 0.804) + 'px'};
  overflow: hidden;
  background-color: ${({ selected, expanded }) =>
    selected && expanded ? Generals.vi : Generals.iv};
  position: relative;
  margin: 0;
  border-radius: 7px;
  box-shadow: 0 0 0 3px
    ${({ selected, expanded }) =>
      selected && !expanded ? Primary.Light : 'transparent'};

  :hover ${MenuToggler} {
    visibility: visible;
  }
`;
export const CardStatusLabel = styled(CardLabel)`
  position: absolute;
  top: 9px;
  left: 10px;
  cursor: pointer;
  z-index: 3;
`;
export const CardVersionLabel = styled(CardLabel)`
  position: absolute;
  top: 9px;
  right: 10px;
  cursor: pointer;
  z-index: 3;
`;
export const StyledCardThumbnail = styled(CardThumbnails)`
  height: ${({ width, expanded }) =>
    expanded ? '50px' : Math.ceil(width * 0.564) + 'px'};
  z-index: 2;
`;

export const WrapperAsset = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${({ width, expanded }) => (expanded ? '100%' : width + 'px')};
  padding: ${({ expanded }) => (expanded ? '6px 27px 7px 15px' : '0px')};
  margin: 0;
  background-color: ${({ selected, expanded }) =>
    selected && expanded ? Generals.v : 'transparent'};
  border-radius: ${({ expanded }) => (expanded ? '5px' : '7px')};
  box-shadow: ${({ selected, expanded, ...props }) =>
    selected && expanded
      ? `0 0 0 2px ${Primary.Light(props)}`
      : !selected && expanded && `0 17px 0 -16px ${Generals.v(props)}`};



  @media (max-width: 1250px) {
    width: ${({ width, expanded }) => (expanded ? '98%' : `${width}px`)};
  }
  :hover {
    cursor: pointer;
    :hover{ 
      ${FileUploader},
      ${FileDurationWrapper},
      ${FileSize},
      ${FileDate},
      ${FileDialogNumLabel},
      ${StyledIcon} {
      color: ${Generals.vii};
    }
    ${FileNameText},
    ${FileNameExtensionLabel} {
      color: ${Generals.viii};
    }
    ${ToggleMenu} {
      visibility:visible;
    }}
  }

${({ isDraggingOver }) =>
  isDraggingOver &&
  css`
    &:hover ${DropLayer} {
      display: flex;
    }
    ${({ expanded }) =>
      expanded
        ? css`
            &:hover {
              box-shadow: 0 0 0 2px ${Primary.Light};
              border-radius: 5px;
            }

            ${DropLayerAddIcon} {
              display: none;
            }
            ${DropLayerCaption} {
              display: none;
            }
          `
        : css`
            :hover ${Wrapper} {
              box-shadow: 0 0 0 3px ${Primary.Light};
            }

            :hover ${Wrapper}::after {
              background-color: #263c75;
              box-shadow: -3px -2px 0 1px ${Primary.Light};
            }
            :hover ${Wrapper}::before {
              background-color: #263c75;
              box-shadow: -2px -3px 0 1px ${Primary.Light};
            }
          `}
  `}
  transform: scale(${({ dragging }) => (dragging ? 0.896 : 1)});
  transition: transform 250ms;
`;
