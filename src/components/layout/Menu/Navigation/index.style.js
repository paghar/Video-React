//@flow
import styled from 'styled-components';
import { Generals, Primary } from 'theme/colors';
import { Wrapper } from 'components/shared/Typography/index.style';
import Avatar from 'components/shared/Avatar';
import Typography from 'components/shared/Typography';
import Icon from 'components/shared/Icon';

export const LogoContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 21px 0px 50px 12px;
`;

export const Logo = styled(Avatar)`
  margin: 0px 12px 0px 0px;
  align-self: center;
`;

export const Text = styled(Typography)`
  align-self: center;
`;

export const IconItem = styled(Icon)`
  margin: 0px 16px 0px 0px;
  align-self: center;
`;
export const MenuItem = styled.div`
  padding: 10px 0px 10px 0px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  ::before{
    content: ' ';
    background-color: ${Primary.Dim};
    width: 4px; 
    height:30px
    margin: 0px 14px 0px 0px;
    visibility: hidden;
  }
  &:hover {
    ${IconItem} {
      color: ${Generals.viii};
    }
    ${Wrapper} {
      color: ${Generals.viii};
    }
    ::before{
      visibility: visible;
    }
  }
`;
