//@flow
import styled from 'styled-components';
import { Generals } from 'theme/colors';

export const DetailWrapper = styled.div`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 2px;
    background-color: ${Generals.v};
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${Generals.vi};
    width: 3px;
    opacity: 0.3;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${Generals.v};
    margin-top: 5px;
    border-radius: 10px;
    opacity: 0.3;
    padding: 5px 0px;
  }
`;
