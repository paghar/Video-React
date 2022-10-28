//@flow
import styled from 'styled-components';
import Button from 'components/shared/Button';
import { Generals } from 'theme/colors';
export const ListViewTitle = styled.figure`
  display: flex;
  justify-content: space-between;
  align-self: center;
  width: 97%;
  margin: 5px 18px 0 9px;
  padding: 0 28px 11px 16px;
  box-shadow: 0 17px 0 -16px ${Generals.v};
  @media (max-width: 1140px) {
    width: 96%;
  }
`;
export const TitleName = styled(Button)`
  padding: 0px;
  justify-content: flex-start;
  @media (max-width: 1140px) {
    overflow: hidden;
    display: flex;
    min-width: 78px;
    width: calc(98px + 17%);
  }
`;
export const TitleUploader = styled(Button)`
  padding: 0px;
  justify-content: flex-start;

  @media (max-width: 1140px) {
    width: 10%;
    min-width: 68px;
    flex-shrink: 0;
  }
`;
export const Title = styled(Button)`
  padding: 0px;
  justify-content: flex-start;
`;
export const TitleSize = styled(Button)`
  padding: 0px;
  justify-content: flex-start;
  :hover {
    cursor: pointer;
  }
`;
export const TitleDuration = styled(Button)`
  padding: 0px;
  justify-content: flex-start;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 1140px) {
    display: none;
  }
`;
