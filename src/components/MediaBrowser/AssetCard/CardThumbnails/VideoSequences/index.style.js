//@flow
import styled from 'styled-components';
import { Secondary } from 'theme/colors';

export const SequencesWrapper = styled.div`
  outline: none;
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const SequenceHolder = styled.div`
  content: ' ';
  width: 100%;
  height: 100%;
  background-image: url(${({ sequencesSrc }) => sequencesSrc});
  background-repeat: no-repeat;
  background-size: 100%;
  z-index: 1;
`;

export const OffsetBar = styled.div`
  content: ' ';
  width: 3px;
  height: 100%;
  position: absolute;
  z-index: 2;
  pointer-events: none;
  background-color: ${Secondary.iii};
`;
