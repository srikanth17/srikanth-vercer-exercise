import React from 'react';
import { DateString, Side, TimeStamp } from '../types/types';

interface TradeListItemProps {
  book_name: string;
  cancelled: boolean;
  end_date: DateString;
  matched: boolean;
  product_name: string;
  side: Side;
  start_date: DateString;
  time_created: TimeStamp;
  trade_date: DateString;
  trade_display_volume: string;
  trade_price: string;
}

const TradeListItem = ({
  book_name,
  cancelled,
  end_date,
  matched,
  product_name,
  side,
  start_date,
  time_created,
  trade_date,
  trade_display_volume,
  trade_price,
}: TradeListItemProps) => {
  const formatDate = (date: string) => {
    const formatStartDate = date.split('-');
    return `${formatStartDate[2]}-${formatStartDate[1]}-${formatStartDate[0]}`;
  };

  return (
    <tr>
      <td>{book_name}</td>
      <td>{cancelled ? 'Yes' : 'No'}</td>
      <td>{formatDate(end_date)}</td>
      <td>{matched ? 'Yes' : 'No'}</td>
      <td>{product_name}</td>
      <td>{side}</td>
      <td>{formatDate(start_date)}</td>
      <td>{new Date(time_created).toDateString()}</td>
      <td>{formatDate(trade_date)}</td>
      <td>{Math.round(parseInt(trade_display_volume))}</td>
      <td>{Number.parseFloat(trade_price).toFixed(2)}</td>
    </tr>
  );
};

export default TradeListItem;
