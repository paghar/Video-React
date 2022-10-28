//@flow
import styled from 'styled-components';
import { Generals, Gradient } from 'theme/colors';
import Icon from 'components/shared/Icon';
export const StyledThumb = styled.div`
  border-radius: 10px;
  background-color: ${Generals.vi};
  width: 3px !important;
  opacity: 0.3;
`;
export const StyledTrack = styled.div`
  height: 100%;
  right: 0px;
  background-color: ${Generals.v};
  margin-top: 5px;
  border-radius: 10px;
  width: 2px !important;
  padding: 5px 0px;
`;
export const Shadow = styled.div`
  width: 255px;
  height: 236px;
  opacity: 0.85;
  background-image: ${Gradient};
  display: flex;
  position: absolute;
  bottom: 0;
  pointer-events: none;
  right: 0;
`;
export const StyledIcon = styled(Icon)`
  margin: 0 auto;
  display: flex;
  align-self: flex-end;
  margin-bottom: 18px;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
