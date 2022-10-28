//@flow
import styled from 'styled-components';
import Avatar from 'components/shared/Avatar';
import Button from 'components/shared/Button';

export const SettingItems = styled.div`
  ${({ isShrinked }) =>
    isShrinked
      ? `display: flex;
         flex-direction: column;
         margin: 0px 12px 29px 12px;`
      : `display: flex;
         margin: 31px 0px 28px 22px;`}
`;

export const AvatarBtn = styled(Avatar)`
  ${({ isShrinked }) =>
    isShrinked
      ? `order: 3;`
      : `order: 1;
    margin-right: 15px;`}
`;

export const QuestionBtn = styled(Button)`
  ${({ isShrinked }) =>
    isShrinked
      ? `order: 1;
         margin:0px 0px 16px 0px;`
      : `order: 2;
         margin-right: 15px;`}
`;

export const SettingBtn = styled(Button)`
  ${({ isShrinked }) =>
    isShrinked
      ? `order: 2;
         margin:0px 0px 16px 0px;`
      : `
         order: 3;
         margin-right: 15px;`}
`;

export const ToggleBtn = styled(Button)`
  ${({ isShrinked }) =>
    isShrinked
      ? `order: 4;
      margin: 63px 0px 0px 0px;`
      : `order: 4;`}
`;
