import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import Toggle from 'react-toggle';
import styled from 'styled-components';
import { clearFilters, setFilters } from '../actions/filters';
import filtersReducer from '../reducers/filters';
import { FilterActionTypes, Filters, Side } from '../types/types';
import theme from '../theme';

const FiltersWrapper = styled.div`
  background: ${theme.palette.background.filter};
`;

const CustomLabel = styled.label`
  position: initial !important;
  color: ${theme.palette.text.primary} !important;
`;

const FilterLabel = styled.h1`
  padding: 10px;
  margin-bottom: 0;
`;

const CustomToggle = styled(Toggle)`
  margin-top: 25px;
`;

const SideLabel = styled.span`
  padding-left: 10px;
`;

const mapDispatch = (
  dispatch: ThunkDispatch<typeof filtersReducer, void, FilterActionTypes>
) => ({
  setFilters: (filters: Filters) => dispatch(setFilters(filters)),
  clearFilters: () => dispatch(clearFilters()),
});

interface OwnProps {
  productNames: string[];
  brokerNames: string[];
}

type TradesListFiltersProps = ReturnType<typeof mapDispatch> & OwnProps;

const TradesListFilters = ({
  productNames,
  brokerNames,
  setFilters,
  clearFilters,
}: TradesListFiltersProps) => {
  const [selectedProductName, setSelectedProductName] = useState('');
  const [selectedBrokerName, setSelectedBrokerName] = useState('');
  const [selectedTradePrice, setSelectedTradePrice] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleProductNameChange = (e: React.FormEvent<HTMLSelectElement>) => {
    setSelectedProductName(e.currentTarget.value);
  };

  const handleBrokerNameChange = (e: React.FormEvent<HTMLSelectElement>) => {
    setSelectedBrokerName(e.currentTarget.value);
  };

  const handleTradePriceChange = (e: React.FormEvent<HTMLSelectElement>) => {
    setSelectedTradePrice(e.currentTarget.value);
  };

  const handleSide = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToggle(!toggle);
  };

  const handleApplyButtonClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let side = '' as Side;
    if (toggle) side = 'buy';
    else side = 'sell';
    const filters = {
      productName: selectedProductName,
      broker: selectedBrokerName,
      tradePrice: selectedTradePrice,
      side,
    };
    setFilters(filters);
  };

  const handleClearButtonClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSelectedProductName('');
    setSelectedBrokerName('');
    setSelectedTradePrice('');
    setToggle(false);
    clearFilters();
  };

  return (
    <FiltersWrapper>
      <div className="row">
        <FilterLabel>Filters</FilterLabel>
        <div className="input-field col s12 m6 l3">
          <CustomLabel>Product Name</CustomLabel>
          <select
            className="browser-default"
            value={selectedProductName}
            onChange={handleProductNameChange}
          >
            <option value="">Choose your option</option>
            {productNames.map(productName => (
              <option key={productName} value={productName}>
                {productName}
              </option>
            ))}
          </select>
        </div>
        <div className="input-field col s12 m6 l3">
          <CustomLabel>Broker</CustomLabel>
          <select
            className="browser-default"
            value={selectedBrokerName}
            onChange={handleBrokerNameChange}
          >
            <option value="">Choose your option</option>
            {brokerNames.map(brokerName => (
              <option key={brokerName} value={brokerName}>
                {brokerName}
              </option>
            ))}
          </select>
        </div>
        <div className="input-field col s12 m6 l3">
          <CustomLabel>Trade Price</CustomLabel>
          <select
            className="browser-default"
            value={selectedTradePrice}
            onChange={handleTradePriceChange}
          >
            <option value="">Choose your option</option>
            <option value="0">Less than 0</option>
            <option value="0 to 100">0 to 100</option>
            <option value="100 to 200">100 to 200</option>
            <option value="200 to 300">200 to 300</option>
            <option value="300 to 400">300 to 400</option>
            <option value="400 to 500">400 to 500</option>
            <option value="500">Above 500</option>
          </select>
        </div>
        <div className="input-field col s12 m6 l3">
          <CustomToggle
            id="buy-sell"
            checked={toggle}
            icons={false}
            onChange={handleSide}
          />
          <SideLabel id="buy-sell">{toggle ? 'Buy' : 'Sell'}</SideLabel>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12 m12 l3">
          <button
            className="btn waves-effect waves-light"
            type="submit"
            onClick={handleApplyButtonClick}
          >
            Apply Filters
          </button>
        </div>
        <div className="input-field col s12 m12 l3">
          <button
            className="btn waves-effect waves-light"
            onClick={handleClearButtonClick}
          >
            Clear Filters
          </button>
        </div>
      </div>
    </FiltersWrapper>
  );
};

export default connect(undefined, mapDispatch)(TradesListFilters);
