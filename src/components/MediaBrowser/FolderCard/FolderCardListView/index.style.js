//@flow
import styled from 'styled-components';
import { Generals } from 'theme/colors';
import Typography from 'components/shared/Typography';
import Button from 'components/shared/Button';
import Icon from 'components/shared/Icon';

export const NameWrapper = styled.div`
  margin-left: 9px;
  display: grid;
  align-self: center;
  flex-direction: column;

  @media (min-width: 1141px) {
    width: 213px;
  }
  @media (max-width: 1140px) {
    min-width: 78px;
    width: 20%;
  }
`;
export const FolderNameLabel = styled(Typography)`
  display: block;
  white-space: nowrap;
  pointer-events: none;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ selected }) => (selected ? Generals.viii : Generals.vii)};
`;
export const FileNumberLabel = styled(Typography)`
  outline: none;
  align-self: auto;
  pointer-events: none;
  margin: 0;
  color: ${({ selected }) => (selected ? Generals.vii : Generals.vi)};
`;

export const FileUploader = styled(Typography)`
  width: 113px;
  display: block;
  pointer-events: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  align-self: center;
  color: ${({ selected }) => (selected ? Generals.vii : Generals.vi)};
  @media (max-width: 1140px) {
    width: 12%;
    min-width: 68px;
  }
`;
export const FileDialogs = styled.div`
  display: flex;
  align-self: center;
  min-width: 46px;
`;
export const StyledIcon = styled(Icon)`
  color: ${({ selected }) => (selected ? Generals.vii : Generals.vi)};
  margin-left: 3px;
  pointer-events: none;
  margin-bottom: 5px;
  user-select: none;
`;
export const FileSize = styled(Typography)`
  color: ${({ selected }) => (selected ? Generals.vii : Generals.vi)};
  align-self: center;
  pointer-events: none;
  min-width: 42px;
`;
export const FileDuration = styled.div`
  width: 55px;
  display: flex;
  align-self: center;
  @media (max-width: 1140px) {
    display: none;
  }
`;
export const Duration = styled(Typography)`
  color: ${({ selected }) => (selected ? Generals.vii : Generals.vi)};
  align-self: center;
  pointer-events: none;
`;
export const FileDate = styled(Typography)`
  color: ${({ selected }) => (selected ? Generals.vii : Generals.vi)};
  display: flex;
  pointer-events: none;
  align-self: center;
  min-width: 86px;
`;

export const FileStatus = styled.div`
  width: 98px;
  align-self: center;
  display: flex;
`;
export const MenuToggler = styled(Button)`
  display: flex;
  visibility: ${({ selected }) => (selected ? 'visible' : 'hidden')};
  align-self: center;
  position: absolute;
  right: 12px;
  :hover {
    cursor: pointer;
  }
`;
export const ItemWrapper = styled.div`
  display: flex;
  width:calc(100% - 89px);
  justify-content: space-between;
  flex: 1 1 auto;
  :hover {
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
    ${MenuToggler} {
      visibility:visible !important;
    }
  }
`;
