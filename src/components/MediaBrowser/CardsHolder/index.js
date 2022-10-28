//@flow
import React, { useRef, useEffect, useState } from 'react';
import Shuffle from 'shufflejs';
import { Scrollbars } from 'react-custom-scrollbars';
import Draggable from 'react-draggable';

import AssetCard from 'components/MediaBrowser/AssetCard';
import FolderCard from 'components/MediaBrowser/FolderCard';
import {
  CardsWrapper,
  StyledThumb,
  StyledTrack,
  AssetGutter,
  FirstAssetGutter,
} from './index.style';
import { findParent } from 'helpers';
import TitleListView from './TitleListView';
import { FOLDER_TYPE } from 'constants/variables';
import {
  selectAssetActionCreator,
  addAssetToSelectionActionCreator,
  startDragActionCreator,
  endDragActionCreator,
} from 'pages/MediaBrowser/index.actions';
import type { AssetCardType } from 'components/MediaBrowser/AssetCard';
import type { FolderCardType } from 'components/MediaBrowser/FolderCard';

export type CardsType = {
  [assetId: string]: (FolderCardType | AssetCardType) & {
    type: string,
    customOrder: number,
  },
};

type Props = {
  expanded: boolean,
  className?: string,
  assetsList: CardsType,
  dispatchAssetsList: any => void,
  dropedOnAsset: (from: any, to: any) => void,
  dropedOnGutter: (from: any, to: any, isFirst: boolean) => void,
};

const CardsHolder = ({
  className,
  assetsList,
  dispatchAssetsList,
  dropedOnAsset,
  dropedOnGutter,
  expanded,
}: Props) => {
  const cardsRef = useRef(); // cards holder element ref
  const shuffleRef: any = useRef(); // shufflejs instance holder
  const [isDragging, setIsDragging] = useState(false);
  const sortByCustomOrder = element => {
    return parseFloat(element.getAttribute('data-order'));
  };
  // create suffle instance on cards
  useEffect(() => {
    shuffleRef.current = new Shuffle(cardsRef.current, {
      useTransforms: false,
      itemSelector: 'figure',
      initialSort: { by: sortByCustomOrder },
    });
    return () => {
      shuffleRef.current.destroy();
    };
  }, []);
  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, [expanded]);
  //style of scroll thumb
  const renderThumb = ({ style }) => {
    return <StyledThumb style={style} />;
  };
  //style of scroll track
  const renderTrackVertical = ({ style }) => {
    return <StyledTrack style={style} />;
  };
  // select an asset by dispatching event to assets store
  const selectAsset = assetId => {
    dispatchAssetsList(selectAssetActionCreator(assetId));
  };
  // dispatch add asset to selection if ctrl key was pressed
  const addAssetToSelection = assetId => {
    dispatchAssetsList(addAssetToSelectionActionCreator(assetId));
  };
  // handle a click on an asset
  const handleAssetClick = (assetId, { ctrlKey, metaKey }) => {
    if (ctrlKey || metaKey) {
      addAssetToSelection(assetId);
    } else {
      selectAsset(assetId);
    }
  };

  // handles on drop element on an other element
  const handleDropZone = (fromAsset, toAsset) => {
    const gutterDroped = findParent(toAsset, 'HR');
    if (gutterDroped) {
      const targetId = findParent(gutterDroped, 'FIGURE').getAttribute(
        'data-id'
      );
      if (targetId)
        dropedOnGutter(
          fromAsset.getAttribute('data-id'),
          targetId,
          gutterDroped.getAttribute('data-id') === '-1'
        );
      shuffleRef.current.sort({ by: sortByCustomOrder });
    } else {
      const figureDroped = findParent(toAsset, 'FIGURE');
      if (figureDroped) {
        const targetId = figureDroped.getAttribute('data-id');
        if (targetId)
          dropedOnAsset(fromAsset.getAttribute('data-id'), targetId);
      }
    }
  };
  // handles when user ends the drag, it reset the style and scalings
  const handleOnDragEnd = ({ target }, { node }) => {
    handleDropZone(node, target);
    const nodeStyle = node.style;
    if (nodeStyle) {
      nodeStyle.transitionDuration = '220ms';
      nodeStyle.transform = 'translate(0,0)';
      nodeStyle.pointerEvents = 'auto';
      nodeStyle.opacity = '1';
      setTimeout(() => (nodeStyle.zIndex = '20'), 500);
      setIsDragging(false);
      dispatchAssetsList(endDragActionCreator(node.getAttribute('data-id')));
    }
    shuffleRef.current.layout();
  };
  // handles on drag start
  const handleOnDragStart = (_, { node }) => {
    node.style.transitionDuration = '0ms';
    startDrag(node);
  };
  // set states and styles on drag start
  const startDrag = node => {
    const nodeStyle = node.style;
    if (nodeStyle) {
      if (!nodeStyle.transitionProperty.includes('transform'))
        nodeStyle.transitionProperty += ', transform, opacity';
      nodeStyle.pointerEvents = 'none';
      nodeStyle.zIndex = '25';
      setIsDragging(node.getAttribute('data-type'));
      dispatchAssetsList(startDragActionCreator(node.getAttribute('data-id')));
    }
  };
  // renders a single folder
  const renderFolder = (assetId, isFirst) => {
    const { customOrder } = assetsList[assetId];
    return (
      <figure
        data-id={assetId}
        data-type="folder"
        data-order={customOrder}
        style={{ order: customOrder }}
      >
        {isFirst && !expanded && (
          <FirstAssetGutter
            isDraggingOver={isDragging}
            data-type="gutter"
            data-id="-1"
          />
        )}
        <FolderCard
          isDraggingOver={isDragging}
          expanded={expanded}
          width={250}
          {...assetsList[assetId]}
          clicked={event => handleAssetClick(assetId, event)}
        />
        {!expanded && (
          <AssetGutter
            isDraggingOver={isDragging}
            data-type="gutter"
            data-id={assetId}
          />
        )}
      </figure>
    );
  };
  // renders a single file
  const renderFile = (assetId, isFirst) => {
    const { customOrder } = assetsList[assetId];
    return (
      <figure
        data-id={assetId}
        data-type="asset"
        style={{ order: customOrder }}
        data-order={customOrder}
      >
        {isFirst && !expanded && (
          <FirstAssetGutter
            isDraggingOver={isDragging}
            data-type="gutter"
            data-id="-1"
          />
        )}
        <AssetCard
          isDraggingOver={isDragging && isDragging !== 'folder'}
          expanded={expanded}
          cardWidth={250}
          {...assetsList[assetId]}
          clicked={event => handleAssetClick(assetId, event)}
        />
        {!expanded && (
          <AssetGutter
            isDraggingOver={isDragging}
            data-type="gutter"
            data-id={assetId}
          />
        )}
      </figure>
    );
  };
  // renders all assets
  const renderAssets = () => {
    const minOrder = Math.min(
      ...Object.keys(assetsList).reduce(
        (prev, current) => [...prev, assetsList[current].customOrder],
        []
      )
    );
    return Object.keys(assetsList).map((assetId, index) => {
      const { customOrder, type } = assetsList[assetId];
      return (
        <Draggable
          position={{ x: 0, y: 0 }}
          onStart={handleOnDragStart}
          onStop={handleOnDragEnd}
          key={assetId}
        >
          {type === FOLDER_TYPE
            ? renderFolder(assetId, customOrder === minOrder)
            : renderFile(assetId, customOrder === minOrder)}
        </Draggable>
      );
    });
  };

  return (
    <>
      {expanded && <TitleListView />}
      <Scrollbars
        style={{ width: '100%' }}
        autoHide
        renderThumbVertical={renderThumb}
        className={className}
        renderTrackVertical={renderTrackVertical}
      >
        <CardsWrapper expanded={expanded} ref={cardsRef}>
          {renderAssets()}
        </CardsWrapper>
      </Scrollbars>
    </>
  );
};

export default CardsHolder;
