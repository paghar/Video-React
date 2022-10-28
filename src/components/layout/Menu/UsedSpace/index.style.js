//@flow
import styled from 'styled-components';
import { Generals } from 'theme/colors';
import Typography from 'components/shared/Typography';

export const UsedSpaceText = styled(Typography)`
  padding-bottom: 8px;
  display: block;
`;

export const LinkDiv = styled(Typography)`
  text-decoration-line: underline;
  text-decoration-style: solid;
  color: ${Generals.vi};
`;
