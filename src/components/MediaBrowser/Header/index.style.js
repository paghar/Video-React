import styled from 'styled-components';
import Button from 'components/shared/Button';
import SearchBar from './SearchBar';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled(SearchBar)`
  margin-left: auto;
`;

export const AddUserButton = styled(Button)`
  margin-left: auto;
  margin-right: 8px;
`;

export const ShareButton = styled(Button)`
  margin-left: 11px;
`;

export const NewButton = styled(Button)`
  margin-left: 7px;
`;

export const NotificationsButton = styled(Button)`
  margin-left: 4px;
`;
