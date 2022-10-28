//@flow

import type { CardsType } from 'components/MediaBrowser/CardsHolder';
import type { ActionType } from './index.actions';
import {
  SELECT_ASSET,
  ADD_ASSET_TO_SELECTION,
  UNSELECT_ALL_ASSETS,
  START_DRAG,
  END_DRAG,
  CHANGE_ORDER,
} from './index.actions';

const unselectAllAssets = (assets: CardsType) => {
  let newState = {};
  Object.keys(assets).forEach(assetId => {
    newState = {
      ...newState,
      [assetId]: { ...assets[assetId], selected: false },
    };
  });
  return newState;
};

const handleAssetOrderChange = (assets: CardsType, { from, to, isFirst }) => {
  const { customOrder: toCustomOrder } = assets[to];
  let newState = {};
  Object.keys(assets).forEach(id => {
    const { customOrder } = assets[id];
    const shouldUpdateOrder = customOrder > toCustomOrder;
    newState = {
      ...newState,
      [id]: {
        ...assets[id],
        customOrder:
          from === id
            ? toCustomOrder + 1 * (isFirst ? -1 : 1)
            : customOrder + (shouldUpdateOrder ? 1 : 0),
      },
    };
  });
  return newState;
};

export const assetsReducer = (
  state: CardsType = {},
  action: ActionType & any
): CardsType => {
  switch (action.type) {
    case SELECT_ASSET:
      const unselectedAssets = unselectAllAssets(state);
      return {
        ...unselectedAssets,
        [action.assetId]: { ...state[action.assetId], selected: true },
      };
    case UNSELECT_ALL_ASSETS:
      return unselectAllAssets(state);
    case ADD_ASSET_TO_SELECTION:
      return {
        ...state,
        [action.assetId]: {
          ...state[action.assetId],
          selected: !state[action.assetId].selected,
        },
      };
    case START_DRAG:
      return {
        ...state,
        [action.assetId]: {
          ...state[action.assetId],
          dragging: true,
        },
      };
    case END_DRAG:
      return {
        ...state,
        [action.assetId]: {
          ...state[action.assetId],
          dragging: false,
        },
      };
    case CHANGE_ORDER:
      return handleAssetOrderChange(state, action);
    default:
      return state;
  }
};
