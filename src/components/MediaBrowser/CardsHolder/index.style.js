//@flow
import styled from 'styled-components';
import { Generals, Primary } from 'theme/colors';

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

export const AssetGutter = styled.hr`
  border: none;
  width: 21px;
  height: 190px;
  content: ' ';
  ${({ isDraggingOver }) =>
      isDraggingOver &&
      `
  :hover::after {
    display: block;
  }
  `}
    ::after {
    content: '';
    position: absolute;
    margin-left: 11px;
    margin-top: 12px;
    width: 2px;
    display: none;
    height: 178px;
    background-color: ${Primary.Dim};
  }
`;
export const FirstAssetGutter = styled(AssetGutter)`
  position: absolute;
  z-index: 999;
  ::after {
    margin-left: 0;
  }
`;
export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: ${({ expanded }) => (expanded ? '100%' : '98%')};
  margin-left: ${({ expanded }) => (expanded ? '0.6%' : '30px')};
  margin-right: ${({ expanded }) => (expanded ? '14px' : '0px')};
  margin-bottom: 15px;
  transform: translate3d(0, 0, 0);
  > figure {
    display: flex;
    z-index: 20;
    width: ${({ expanded }) => (expanded ? '97%' : `auto`)};
    height: ${({ expanded }) => (expanded ? '62px' : `auto`)};
    margin-left: ${({ expanded }) => (expanded ? '11px' : '3px')};
    margin-bottom: ${({ expanded }) => (expanded ? '3px' : '6px')};
    margin-right: ${({ expanded }) => (expanded ? '3px' : '0')};
    margin-top: 3px;
    &[data-type='folder'] {
      margin-bottom: ${({ expanded }) => (expanded ? '0' : '9px')};
    }
    &[data-type='asset'] {
      margin-top: ${({ expanded }) => (expanded ? '0' : '6px')};
    }
  }
`;
