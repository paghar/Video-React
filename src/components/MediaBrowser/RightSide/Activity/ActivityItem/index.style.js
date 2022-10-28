//@flow
import styled from 'styled-components';
import Typography from 'components/shared/Typography';
export const StyledDiv = styled.div`
  outline: none;
  border: none;
  background: none;
  display: flex;
  align-items: flex-start;
  padding: 0px 27px 0px 20px;
  margin: 30px 0px;
`;
export const StyledActivityDiv = styled.div`
  flex: 1;
  padding-left: 7px;
  position: relative;
`;
export const UserNameLabel = styled(Typography)`
  outline: none;
  display: flex;
  align-self: center;
  pointer-events: none;
`;
export const TimeLabel = styled(Typography)`
  position: absolute;
  top: 0px;
  right: 0px;
`;
export const TextLabel = styled(Typography)`
  outline: none;
  display: flex;
  align-self: center;
  pointer-events: none;
`;
