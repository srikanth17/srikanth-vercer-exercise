export const SET_TRADES = 'SET_TRADES';
export const SET_FILTERS = 'SET_FILTERS';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';
export type DateString = string;
export type TimeStamp = string;
export type Side = 'buy' | 'sell';

interface ChildTrade {
  id: number;
  trade_display_volume: string;
  lot_size: string;
  price: string;
  lot_quantity: number;
  side: string;
  start_date: DateString;
  end_date: DateString;
  brokerage_multiplier: number;
}

export interface Trade {
  id: number;
  child_trade_set: ChildTrade[];
  lot_unit_name: string;
  broker_name: string;
  trader_name: null;
  book_name: string;
  product_name: string;
  exchange_name: string;
  source_book_name: string | null;
  cancelled: boolean;
  matched_trade: null;
  manual: boolean;
  lot_quantity_spread: number;
  trade_date: DateString;
  exchange_trade_id: null;
  tas: boolean;
  tap: boolean;
  rollon_settlement_period: null;
  screen: boolean;
  time_created: TimeStamp;
  isin: null;
  trade_type: string;
  calendar_period: string;
  trade_display_volume: string;
  trade_brokerage_multiplier: number;
  matched: boolean;
  start_date_spread: DateString | null;
  end_date_spread: DateString | null;
  start_date: DateString;
  end_date: DateString;
  side: Side;
  spread: boolean;
  trade_price: string;
}

export interface Filters {
  productName: string;
  broker: string;
  tradePrice: string;
  side: Side;
}

export interface SetTradeAction {
  type: typeof SET_TRADES;
  payload: Trade[];
}

export interface SetFiltersAction {
  type: typeof SET_FILTERS;
  filters: Filters;
}

export interface ClearFiltersAction {
  type: typeof CLEAR_FILTERS;
}

export type FilterActionTypes = SetFiltersAction | ClearFiltersAction;
