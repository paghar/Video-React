//@flow
import styled from 'styled-components';
import Menu from 'containers/Menu';

export const PanelContainer = styled.div`
  display: flex;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  height: 100vh;
`;

export const LeftMenu = styled(Menu)`
  flex-grow: 0;
  flex-shrink: 0;
`;
