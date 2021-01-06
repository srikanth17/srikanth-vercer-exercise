import { Filters, Trade } from '../types/types';

export const selectTrades = (
  trades: Trade[],
  { productName, broker, tradePrice, side }: Filters
) => {
  return trades.filter(trade => {
    const productNameMatch = trade.product_name
      .toLowerCase()
      .includes(productName.toLowerCase());
    const brokerMatch = trade.broker_name
      .toLowerCase()
      .includes(broker.toLowerCase());
    const sideMatch = trade.side.toLowerCase().includes(side.toLowerCase());
    const tradePriceRange = findTradePriceRange(trade.trade_price, tradePrice);
    return productNameMatch && brokerMatch && sideMatch && tradePriceRange;
  });
};

const findTradePriceRange = (trade_price: string, tradePrice: string) => {
  const trade_priceInFloat = parseFloat(trade_price);
  const convertedTradePrice = tradePrice.split(' ');
  if (convertedTradePrice[0] === '') return true;
  if (convertedTradePrice.length === 1 && convertedTradePrice[0] === '0') {
    return parseFloat(convertedTradePrice[0]) > trade_priceInFloat;
  }
  if (convertedTradePrice.length === 1 && convertedTradePrice[0] === '500') {
    return parseFloat(convertedTradePrice[0]) < trade_priceInFloat;
  }
  if (convertedTradePrice.length > 1) {
    return (
      parseFloat(convertedTradePrice[0]) <= trade_priceInFloat &&
      parseFloat(convertedTradePrice[2]) > trade_priceInFloat
    );
  }
  return false;
};

export const totalTradePrice = (trades: Trade[]) => {
  return trades
    .map(trade => parseFloat(trade.trade_price))
    .reduce((sum, value) => sum + value, 0);
};
