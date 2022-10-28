//@flow
import * as React from 'react';
import { PanelContainer, ContentWrapper, LeftMenu } from './index.style';

type Props = {
  children?: React.Node,
};

const UserPanel = ({ children }: Props) => {
  return (
    <PanelContainer>
      <LeftMenu />
      <ContentWrapper>{children}</ContentWrapper>
    </PanelContainer>
  );
};

export default UserPanel;
