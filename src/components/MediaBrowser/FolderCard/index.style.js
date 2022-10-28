//@flow
import styled, { css } from 'styled-components';
import { Generals, Primary } from 'theme/colors';
import {
  FileDate,
  StyledIcon,
  FileSize,
  FileUploader,
  MenuToggler,
  FileNumberLabel,
  FolderNameLabel,
} from './FolderCardListView/index.style';
import Typography from 'components/shared/Typography';
import Button from 'components/shared/Button';
import Icon from 'components/shared/Icon';
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
  height: 100%;
  z-index: 19;
  display: ${({ dragging }) => (dragging ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;

  background-color: ${({ dragging, expanded, ...props }) =>
    dragging
      ? hexToRgb(Generals.iv(props), 0.7)
      : expanded
      ? Generals.v(props)
      : hexToRgb(Primary.Dim(props), 0.28)};
  ${({ expanded, dragging }) => expanded && !dragging && `z-index: -9999;`}
  ${({ dragging }) =>
    dragging &&
    `
    ${DropLayerCaption} {
      display: none;
    }
    ${DropLayerAddIcon} {
      display: none;
    }
    ::after{
      display: none;
    }

  `};
  ::after {
    content: '';
    position: absolute;
    width: 23px;
    height: 9px;
    top: 0;
    left: 111px;
    background-color: #263c75;
  }
`;

export const More = styled(Button)`
  margin: 10px 2px 0 0;
  padding-right: 0px;
  display: ${({ selected }) => (selected ? 'block' : 'none')};
  align-self: center;
  cursor: pointer;
  justify-content: flex-end;
`;
export const FolderWrapper = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: space-between;
  width: ${({ expanded }) => (expanded ? '89px' : ' 100%')};
  min-width: ${({ expanded }) => (expanded ? '89px' : ' 100%')};

  padding-left: ${({ expanded }) => (expanded ? '0' : '9px')};
  padding-right: ${({ expanded }) => (expanded ? '0' : '9px')};
  padding-bottom: ${({ expanded }) => (expanded ? '0' : '14px')};
  padding-top: ${({ expanded }) => (expanded ? '0' : '9px')};
  margin-top: ${({ expanded }) => (expanded ? '5px' : ' 0')};
  background-color: ${({ selected, expanded }) =>
    selected && expanded ? Generals.vi : Generals.iv};
  border-radius: 0 7px 7px 7px;
  box-shadow: 0 0 0 3px
    ${({ selected, expanded }) =>
      selected && !expanded ? Primary.Light : 'transparent'};
  z-index: 17;

  ::after {
    content: '';
    display: inline-block;
    position: absolute;
    box-shadow: -3px -2px 0 1px ${({ selected, expanded }) => (selected && !expanded ? Primary.Light : 'transparent')};
    z-index: -1;
    top: ${({ expanded }) => (expanded ? '-3px' : '-8px')};
    left: ${({ expanded }) => (expanded ? '37px' : '111px')};
    transform: rotate(45deg);
    width: ${({ expanded }) => (expanded ? '10px' : '20px')};
    height: ${({ expanded }) => (expanded ? '10px' : '12px')};
    background-color: ${({ selected, expanded }) =>
      selected && expanded ? Generals.vi : Generals.iv};
  }
  ::before {
    z-index: 0;
    box-shadow: -2px -3px 0 1px ${({ selected, expanded }) => (selected && !expanded ? Primary.Light : 'transparent')};
    content: '';
    display: inline-block;
    position: absolute;
    top: ${({ expanded }) => (expanded ? '-5px' : '-14px')};
    left: 0px;
    width: ${({ expanded }) => (expanded ? '42px' : '118px')};
    height: ${({ expanded }) => (expanded ? '5px' : '14px')};
    background-color: ${({ selected, expanded }) =>
      selected && expanded ? Generals.vi : Generals.iv};
    border-radius: 7px 0 0 0;
  }

  :hover ${More} {
    display: ${({ expanded }) => (!expanded ? 'block' : '')};
  }
`;
export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 138px;
  align-items: flex-start;
  flex-wrap: wrap;
  flex: 1 1 auto;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Thumbnail = styled.img`
  pointer-events: none;
  width: ${({ fileCount }) => (fileCount === 1 ? '100%' : '48.5%')};
  height: ${({ fileCount }) => (fileCount > 2 ? '67px' : '137px')};
  ${({ fileCount }) =>
    fileCount === 3
      ? css`
          :nth-child(3) {
            width: 100%;
            margin-top: 5px;
          }
        `
      : fileCount === 4
      ? css`
          :nth-child(n + 3) {
            margin-top: 5px;
          }
        `
      : fileCount === 5
      ? css`
          :nth-child(-n + 3) {
            width: 48.5%;
            height: 76px;
          }
          :nth-child(n + 3) {
            width: 32%;
            height: 56px;
            margin-top: 5px;
          }
        `
      : fileCount > 5
      ? css`
          :nth-child(n + 3) {
            width: 32%;
            height: 56px;
            margin-top: 5px;
          }
          :nth-child(-n + 2) {
            width: 48.6%;
            height: 76px;
          }
        `
      : ''};
  align-self: center;
  object-fit: cover;
`;

export const LastThumbnailWrapper = styled.div`
  display: block;
  position: relative;
  display: inline-block;
  width: 32%;
  height: 56px;

  ${Thumbnail} {
    margin-top: 5px;
    width: 100%;
    height: 100%;
  }
`;

export const Numbers = styled(Typography)`
 display: block;
  position: absolute;
  :before {
    content: '${({ fileCount }) => `+${fileCount - 5}`}';
  }
  color: white;
  display:flex;
  align-self: center;
  text-align: center;
  align-items: center;
  justify-content:center;
  background-color: ${hexToRgb(Generals.iv, 0.7)};
  top: 5px;
  left: 0;
  width: 100%;
  height: 100%;
`;
export const FolderInfo = styled.div`
  display: flex;
  width: 100%;
  margin: 0 0 0 2px;
  height: 20px;
`;
export const FolderName = styled(Typography)`
  white-space: nowrap;
  margin: 8px 0 0 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  outline: none;
  flex-grow: 1;
  align-self: center;
`;
export const FileCountWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 0;
  flex-shrink: 0;
`;
export const FileNumber = styled(Typography)`
  outline: none;
  align-self: center;
  margin: 8px 2px 0 0;
`;

export const Wrapper = styled.div`
  display: flex;
  width: ${({ width, expanded }) => (expanded ? '100%' : `${width}px`)};
  flex-wrap: ${({ expanded }) => (expanded ? 'nowrap' : 'wrap')};
  justify-content: space-between;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: ${({ expanded }) => (expanded ? '0px' : '15px')};
  padding: ${({ expanded }) => (expanded ? '6px 27px 7px 15px' : '0')};
  background-color: ${({ selected, expanded }) =>
    selected && expanded ? Generals.v : 'transparent'};

  border-radius: ${({ selected }) => (selected ? '5px' : '0px')};
  box-shadow: ${({ selected, expanded }) =>
    selected && expanded
      ? css`0 0 0 2px ${Primary.Light}`
      : !selected && expanded && css`0 17px 0 -16px ${Generals.v}`};
  transform: scale(${({ dragging }) => (dragging ? 0.896 : 1)});
  transition: transform 250ms;
  pointer-events: ${({ dragging }) => (dragging ? 'none' : 'auto')};

  :hover {
    cursor: pointer;
    ${MenuToggler} {
      visibility: visible !important;
    }
    ${FileDate},
    ${StyledIcon},
    ${FileSize},
    ${FileUploader},
    ${FileNumberLabel} {
      color: ${Generals.vii};
    }
    ${FolderNameLabel} {
      color: ${Generals.viii};
    }
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
                :hover ${FolderWrapper} {
                  background-color: #5971ad;
                }
                :hover ${FolderWrapper}::after {
                  background-color: #5971ad;
                }
                :hover ${FolderWrapper}::before {
                  background-color: #5971ad;
                }
                ${DropLayer}::after {
                  display: none;
                }
                ${DropLayerAddIcon} {
                  display: none;
                }
                ${DropLayerCaption} {
                  display: none;
                }
              `
            : css`
                :hover ${FolderWrapper} {
                  box-shadow: 0 0 0 3px ${Primary.Light};
                }

                :hover ${FolderWrapper}::after {
                  background-color: #263c75;
                  box-shadow: -3px -2px 0 1px ${Primary.Light};
                }
                :hover ${FolderWrapper}::before {
                  background-color: #263c75;
                  box-shadow: -2px -3px 0 1px ${Primary.Light};
                }
              `}
      `}

  @media (max-width: 1140px) {
    width: ${({ width, expanded }) => (expanded ? '97%' : `${width}px`)};
  }
`;
