import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../reducers';
import { selectTrades, totalTradePrice } from '../selectors/trades';
import TradeListItem from './TradeListItem';

const mapState = (state: RootState) => ({
  trades: selectTrades(state.trades.items, state.filters.filters),
});

type TradesListProps = ReturnType<typeof mapState>;

const TradesList = ({ trades }: TradesListProps) => (
  <>
    <p>
      <strong>Total Trade Price -</strong> {totalTradePrice(trades).toFixed(3)}
    </p>
    <p>
      <strong>Average Trade Price -</strong>{' '}
      {(totalTradePrice(trades) / trades.length).toFixed(3)}
    </p>
    <table className="responsive-table highlight">
      <thead>
        <tr>
          <th>Book Name</th>
          <th>Cancelled</th>
          <th>End date</th>
          <th>Matched</th>
          <th>Product name</th>
          <th>Side</th>
          <th>Start date</th>
          <th>Created at</th>
          <th>Trade date</th>
          <th>Trade display volume</th>
          <th>Trade price</th>
        </tr>
      </thead>
      <tbody>
        {trades.map(trade => (
          <TradeListItem key={trade.id} {...trade} />
        ))}
      </tbody>
    </table>
  </>
);

export default connect(mapState)(TradesList);
