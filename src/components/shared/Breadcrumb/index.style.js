//@flow
import styled from 'styled-components';
import Icon from 'components/shared/Icon';
export const BreadcrumbWrapper = styled.ul`
  display: flex;
  display: box;
  list-style: none;
  align-items: flex-start;
  pointer-events: none;
  align-self: center;
  outline: none;
  border: none;
  background: none;
  padding-left: 0;
  padding-right: 0;
  margin: 0;
`;
export const BreadcrumbItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const StyledIcon = styled(Icon)`
  padding: 0 13px;
`;
