//@flow
import React from 'react';
import OptionBar from 'components/MediaBrowser/OptionBar';
import Breadcrumb from 'components/shared/Breadcrumb';
import {
  MediaBrowserWrapper,
  RightSidePanel,
  MediaBrowserLeftContent,
  MediaBrowserHeader,
  RightSideMenuWrapper,
  StyledCardsHolder,
  BarItems,
} from './index.style';
import { Avatars as AvatarColors } from 'theme/colors';
import temp from 'components/MediaBrowser/RightSide/tempData';
import image from 'assets/image/christopher-campbell-rDEOVtE7vOs-unsplash.png';
import type { CardsType } from 'components/MediaBrowser/CardsHolder';

type Props = {
  isRightMenuOpen?: boolean,
  toggleRightMenu: () => void,
  toggleListView: () => void,
  assetsList: CardsType,
  dispatchAssetsList: any => void,
  dropedOnAsset: (from: any, to: any) => void,
  dropedOnGutter: (from: any, to: any, isFirst: boolean) => void,
  expanded: boolean,
};

const MediaBrowser = ({
  isRightMenuOpen,
  toggleListView,
  toggleRightMenu,
  assetsList,
  dispatchAssetsList,
  dropedOnAsset,
  dropedOnGutter,
  expanded,
}: Props) => {
  return (
    <MediaBrowserWrapper>
      <MediaBrowserLeftContent>
        <MediaBrowserHeader
          projectTitle="Animal House"
          fiveProjectUsers={[
            {
              color: AvatarColors[0],
              name: 'PZ',
              image,
            },
            {
              color: AvatarColors[2],
              name: 'PZ',
            },
          ]}
          otherUsersCount={3}
          avatarsClicked={console.log}
          addUserClicked={console.log}
          shareClicked={console.log}
          newClicked={console.log}
          notificationClicked={() => toggleRightMenu()}
        />
        <BarItems>
          <Breadcrumb
            clicked={id => {
              console.log(id);
            }}
            items={['Projects', 'Animal House', 'Episode1']}
          />
          <OptionBar
            clicked={() => toggleListView()}
            fileNumber="25"
            fileSize="800MB"
          ></OptionBar>
        </BarItems>

        <StyledCardsHolder
          expanded={expanded}
          assetsList={assetsList}
          dropedOnAsset={dropedOnAsset}
          dropedOnGutter={dropedOnGutter}
          dispatchAssetsList={dispatchAssetsList}
        />
      </MediaBrowserLeftContent>

      <RightSideMenuWrapper isOpen={isRightMenuOpen}>
        <RightSidePanel activities={temp} />
      </RightSideMenuWrapper>
    </MediaBrowserWrapper>
  );
};

export default MediaBrowser;
