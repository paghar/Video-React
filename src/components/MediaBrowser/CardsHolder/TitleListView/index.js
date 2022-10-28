import React from 'react';
import {
  ListViewTitle,
  TitleUploader,
  TitleDuration,
  TitleName,
  TitleSize,
  Title,
} from './index.style';
import Typography from 'components/shared/Typography';
import { Generals } from 'theme/colors';
import { Display1 } from 'theme/fonts';
type Props = {
  className?: string,
  clicked?: any => void,
};
const TitleListView = ({ className, clicked }: Props & AssetCardType) => {
  return (
    <ListViewTitle>
      <TitleName width="311px">
        <Typography color={Generals.vii} font={Display1}>
          Name
        </Typography>
      </TitleName>
      <TitleUploader width="112px">
        <Typography color={Generals.vii} font={Display1}>
          Uploader
        </Typography>
      </TitleUploader>
      <Title width="54px">
        <Typography color={Generals.vii} font={Display1}>
          Dialogs
        </Typography>
      </Title>
      <TitleSize width="45px">
        <Typography color={Generals.vii} font={Display1}>
          size
        </Typography>
      </TitleSize>
      <TitleDuration width="57px">
        <Typography color={Generals.vii} font={Display1}>
          Duration
        </Typography>
      </TitleDuration>
      <Title width="86px">
        <Typography color={Generals.vii} font={Display1}>
          UploadDate
        </Typography>
      </Title>
      <Title width="99px">
        <Typography color={Generals.vii} font={Display1}>
          Status
        </Typography>
      </Title>
    </ListViewTitle>
  );
};

export default TitleListView;
