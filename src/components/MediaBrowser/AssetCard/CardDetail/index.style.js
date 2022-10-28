//@flow
import styled from 'styled-components';
import { Generals } from 'theme/colors';
import Typography from 'components/shared/Typography';
import Button from 'components/shared/Button';

export const DetailWrapper = styled.div`
  position: relative;
  padding-left: 10px;
  padding-right: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: end;
`;

export const TopWrapper = styled.div`
  display: flex;
  margin-top: 2.4%;
  margin-bottom: auto;
`;

export const BottomWrapper = styled.div`
  display: flex;
  margin-top: auto;
  margin-bottom: 3.3%;
`;

export const AssetTitle = styled(Typography)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const AssetFormatExtension = styled(Typography)`
  padding-right: 4px;
`;

export const AssetDuration = styled(Typography)`
  height: 21px;
  border-radius: 5px;
  background-color: ${Generals.ii};
  text-align: center;
  padding-right: 7px;
  padding-left: 7px;
  display: inline-block;
  margin-right: 5px;
`;

export const AssetSize = styled(Typography)`
  width: auto;
`;

export const CommentsNumber = styled(Button)`
  margin-left: auto;
`;

export const MenuToggler = styled(Button)`
  margin-left: auto;
  margin-right: 6px;
  padding-right: 0;
  visibility: hidden;
  cursor: pointer;
`;
