import styled from 'styled-components';
import Button from 'components/shared/Button';
import Avatar from 'components/shared/Avatar';

export const Wrapper = styled.div`
  display: flex;
`;

export const AvatarButton = styled(Avatar)`
  margin-left: -8px;
  :first-child {
    margin-left: 0;
  }
`;

export const OtherUsersButton = styled(Button)`
  border: 2px solid #000;
  margin-left: -8px;
`;
