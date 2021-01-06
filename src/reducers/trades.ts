import { SET_TRADES, Trade, SetTradeAction } from '../types/types';

const tradesReducerDefaultState = {
  items: [] as Trade[],
};

export default function tournaments(
  state = tradesReducerDefaultState,
  action: SetTradeAction
) {
  switch (action.type) {
    case SET_TRADES:
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
}
