import {
  CLEAR_FILTERS,
  FilterActionTypes,
  SET_FILTERS,
  Side,
} from '../types/types';

const filterReducerDefaultState = {
  filters: { productName: '', broker: '', tradePrice: '', side: '' as Side },
};

export default function filters(
  state = filterReducerDefaultState,
  action: FilterActionTypes
) {
  switch (action.type) {
    case SET_FILTERS:
      return {
        ...state,
        filters: action.filters,
      };
    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          productName: '',
          broker: '',
          tradePrice: '',
          side: '' as Side,
        },
      };
    default:
      return state;
  }
}
