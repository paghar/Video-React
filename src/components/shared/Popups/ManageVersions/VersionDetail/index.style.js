//@flow
import styled from 'styled-components';
import Typography from 'components/shared/Typography';
import Button from 'components/shared/Button';
import { Generals } from 'theme/colors';

export const CloseBtn = styled(Button)`
  display: none;
  margin-left: 20px;
  align-self: center;
  pointer: cursor;
`;

export const Wrapper = styled.div`
  background-color: ${Generals.viii};
  width: 385px;
  border: 1px solid ${Generals.x};
  border-radius: 7px;
  display: flex;
  padding: 10px 0px 10px 13px;
  :hover {
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    cursor: pointer;
    ${CloseBtn} {
      display: inline;
    }
  }
`;
export const Version = styled(Typography)`
  align-self: center;
  margin-right: 13px;
`;

export const Image = styled.img`
  width: 85px;
  align-self: center;
  margin-right: 15px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
