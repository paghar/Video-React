//@flow
import styled, { css } from 'styled-components';
import VersionDetail from './VersionDetail';
import { Generals } from 'theme/colors';
import Button from 'components/shared/Button';
import Typography from 'components/shared/Typography';
import {
  Wrapper as VersionDetailWrapper,
  CloseBtn,
} from './VersionDetail/index.style';

export const Wrapper = styled.div`
  background-color: ${Generals.viii};
  width: 425px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
`;
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 20px 0px 20px;
`;
export const SubTitle = styled(Typography)`
  margin: 5px 0px 12px 20px;
`;
export const VersionWrapper = styled.div`
  margin: 0px 7px 0px 7px;
  padding: 0px 13px 0px 13px;
  background-color:${Generals.viii}     
   ${({ hasScroll }) =>
     hasScroll &&
     css`
       height: 365px;
       overflow-y: scroll;
     `}  
  overflow-x: hidden;   
::-webkit-scrollbar {
    width: 3px; 
    height:10px;   
}
 
::-webkit-scrollbar-track {
    background-color: ${Generals.viii}
    -webkit-border-radius: 3px;
    border-radius: 3px;
    margin:10px;
}

::-webkit-scrollbar-thumb {   
    -webkit-border-radius: 3px;
    border-radius: 3px;
    background: ${Generals.vii};    
}
}
`;
export const VersionDetailRow = styled.div`
  padding-bottom: 5px;
  ${({ isDragging }) =>
    isDragging &&
    `
    ${VersionDetailWrapper} {    
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    cursor: pointer;
    ${CloseBtn} {
      display: inline;
    }
  }
    `}
`;

export const VersionDetailComponet = styled(VersionDetail)`
  margin: 0px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 15px 20px 20px 0px;
`;

export const UnversionAllBtn = styled(Button)`
  padding: 7px 12px;
  pointer: cursor;
`;
