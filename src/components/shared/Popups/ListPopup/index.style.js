//@flow
import styled from 'styled-components';
import Icon from 'components/shared/Icon';

export const PopupBox = styled.div`
   background-color:${({ backgroundColor }) => backgroundColor}  
   width: ${({ width }) => width};
   height: ${({ height }) => height};
   border-radius: ${({ borderRadius }) => borderRadius};
   margin:0px;
   padding-top:5px;
   padding-bottom: 5px;     
   box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const IconItem = styled(Icon)`
  margin-right: 8px;
  align-self: center;
`;

export const SubIcon = styled(Icon)`
  margin-left: 46px;
  margin-right: 5px;
  align-self: center;
`;

export const Sublist = styled.div`
  display: none; 
`;

export const ItemWrapper = styled.div`
  display: flex; 
  height: 27px;
  :hover {
    ${Sublist} {
      display: block;
    }
  }
`;
export const PopupItem = styled.div`  
  flex-grow: 1
  flex-shrink: 0;    
  padding: 3px 0px 3px 5px;
  margin: 0px 5px 0px 5px;  
  cursor: pointer;
  :hover {
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor};
    color: ${({ hoverColor }) => hoverColor};
    border-radius: 5px;
    ${IconItem} {
      color: ${({ hoverColorIcon }) => hoverColorIcon};
    }
    ${SubIcon} {
      color: ${({ hoverColorIcon }) => hoverColorIcon};
    }
    }   
  }
`;

export const Line = styled.hr`
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  margin: 6px 0px 2px 0px;
`;
