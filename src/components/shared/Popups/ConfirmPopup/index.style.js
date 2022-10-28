//@flow
import styled, { css } from 'styled-components';
import Typography from 'components/shared/Typography';
import Button from 'components/shared/Button';

export const Wrapper = styled.div`
   background-color:${({ backgroundColor }) => backgroundColor}  
   width: ${({ width }) => width};  
   border-radius: ${({ borderRadius }) => borderRadius};
   display: flex;
   flex-direction: column;   
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2);  
`;

export const Title = styled(Typography)`
  margin: 15px 0px 0px 16px;
`;

export const Context = styled(Typography)`
  align-self: center;
`;
export const Image = styled.img`
  width: ${({ width }) => width};
  border-radius: 7px;
`;
export const ContextWrapper = styled.div`
  display: flex;
  margin: 13px 15px 0px 16px;
  ${({ hasThumbnail }) => hasThumbnail && `${Context}{margin-left:10px;}`}
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 18px 15px 15px 0px;
`;

export const Btn = styled(Button)`
  padding: 4px 13px;
  margin-left: 7px;
  ${({ hasBorder }) =>
    hasBorder &&
    css`
      border: 1px solid ${hasBorder};
    `}
`;
