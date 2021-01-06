import React, { useEffect, useState } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { SetTradeAction, Trade } from '../types/types';
import Header from './Header';
import tradesReducer from '../reducers/trades';
import { setTrades } from '../actions/trades';
import TradesList from './TradesList';
import TradesListFilters from './TradesListFilters';
import { RootState } from '../reducers';

const mapState = (state: RootState) => ({
  trades: state.trades.items,
});

const mapDispatch = (
  dispatch: ThunkDispatch<typeof tradesReducer, void, SetTradeAction>
) => ({
  setTrades: (items: Trade[]) => dispatch(setTrades(items)),
});

type AppProps = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;

const App = ({ trades, setTrades }: AppProps) => {
  const [productNames, setProductNames] = useState([] as string[]);
  const [brokerNames, setBrokerNames] = useState([] as string[]);

  useEffect(() => {
    fetch('http://localhost:4000/trades').then(response => {
      if (response.ok) {
        response.json().then((res: Trade[]) => {
          setTrades(res);
        });
      }
    });
  }, []);

  useEffect(() => {
    if (trades.length > 0) {
      let productNames = [] as string[];
      let brokerNames = [] as string[];
      trades.forEach(trade => {
        productNames = [...productNames, trade.product_name];
        brokerNames = [...brokerNames, trade.broker_name];
      });
      const uniqueProductNames = productNames.filter(
        (name, index) => productNames.indexOf(name) === index
      );
      const uniqueBrokerNames = brokerNames.filter(
        (name, index) => brokerNames.indexOf(name) === index
      );
      setProductNames(uniqueProductNames);
      setBrokerNames(uniqueBrokerNames);
    }
  }, [trades]);

  return (
    <div>
      <Header />
      <div className="container">
        <TradesListFilters
          productNames={productNames}
          brokerNames={brokerNames}
        />
        <TradesList />
      </div>
    </div>
  );
};

export default connect(mapState, mapDispatch)(App);
