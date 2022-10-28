//@flow
import styled from 'styled-components';
import CardLabel from '../CardLabel';
import Typography from 'components/shared/Typography';
import Button from 'components/shared/Button';
import Icon from 'components/shared/Icon';
import { Generals } from 'theme/colors';

export const FileNameWrapper = styled.div`
  display: flex;
  align-self: center;
  margin-left: 9px;
  @media (min-width: 1141px) {
    width: 213px;
  }
  @media (max-width: 1140px) {
    overflow: hidden;
    display: flex;
    min-width: 78px;
    width: 20%;
  }
`;
export const FileNameText = styled(Typography)`
  color: ${({ selected }) => (selected ? Generals.viii : Generals.vii)};
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  align-self: center;
`;
export const FileNameExtensionLabel = styled(Typography)`
  color: ${({ selected }) => (selected ? Generals.viii : Generals.vii)};
  display: flex;
  align-self: center;
`;
export const CardVersionLabel = styled(CardLabel)`
  position: relative;
  margin-left: 9px;
  background-color: ${Generals.iv};
  :hover {
    background-color: ${Generals.iii};
  }
`;

export const FileUploader = styled(Typography)`
  color: ${({ selected }) => (selected ? Generals.vii : Generals.vi)};
  width: 113px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  align-self: center;
  @media (max-width: 1140px) {
    width: 12%;
    min-width: 68px;
  }
`;
export const FileDialogs = styled.div`
  display: flex;
  align-self: center;
  width: 46px;
`;
export const FileDialogNumLabel = styled(Typography)`
  color: ${({ selected }) => (selected ? Generals.vii : Generals.vi)};
  align-self: center;
`;
export const StyledIcon = styled(Icon)`
  color: ${({ selected }) => (selected ? Generals.vii : Generals.vi)};
  display: flex;
  align-self: center;
  margin-right: 3px;
`;
export const FileSize = styled(Typography)`
  color: ${({ selected }) => (selected ? Generals.vii : Generals.vi)};
  align-self: center;
  width: 45px;
`;
export const FileDurationWrapper = styled.div`
  width: 55px;
  align-self: center;
  @media (max-width: 1140px) {
    display: none;
  }
`;
export const Duration = styled(Typography)`
  color: ${({ selected }) => (selected ? Generals.vii : Generals.vi)};
  align-self: center;
`;

export const FileDate = styled(Typography)`
  color: ${({ selected }) => (selected ? Generals.vii : Generals.vi)};
  display: flex;
  align-self: center;
  width: 86px;
`;
export const FileStatus = styled.div`
  width: 98px;
  align-self: center;
`;
export const CardStatusLabel = styled(CardLabel)`
  position: relative;
  align-self: center;
  background-color: ${Generals.iv};
  :hover {
    background-color: ${Generals.iii};
  }
`;
export const ToggleMenu = styled(Button)`
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
  width:calc(100% - 89px);
  display:flex;
  justify-content: space-between;
  flex: 1 1 auto;
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

`;
