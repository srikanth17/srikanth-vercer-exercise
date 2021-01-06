import { Trade, SetTradeAction, SET_TRADES } from '../types/types';

export const setTrades = (items: Trade[]): SetTradeAction => ({
  type: SET_TRADES,
  payload: items,
});
