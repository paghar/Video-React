//@flow
import styled from 'styled-components';

export const AvatarBtn = styled.button`
  background-color:${({ backgroundColor }) => backgroundColor}  
  ${({ imgUrl }) => imgUrl && `background-image: url(${imgUrl});`}
  background-size: 100% 100%;
   width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ isBorder }) => (isBorder ? '2px' : '0px')} solid #0d0d1a;  
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
`;
