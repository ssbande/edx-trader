import React, { Fragment } from 'react';
import { Select, Typography } from 'antd';
import { setSymbol } from '../infrastructure/actions';
import { connect } from 'react-redux';

const { Text } = Typography;
const symbolTicker = [
  'AAPL',
  'MSFT',
  'GOOGL',
  'VZ',
  'MMM',
  'NFLX',
  'FB',
  'TWTR',
  'AMZN',
  'EBAY'
]

const { Option } = Select;
const Symbol = props => {
  const createSymbolList = () => symbolTicker.map(symbol => {
    return <Option key={symbol} value={symbol}>{symbol}</Option>
  })

  const handleSymbolChange = (value) => {
    props.setSymbol(value)
  }

  return <Fragment>
    <div><Text strong>Symbol</Text></div>
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Select a symbol"
      optionFilterProp="children"
      onChange={handleSymbolChange}
      notFoundContent={<div>Not found</div>}
      filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
    >
      {createSymbolList()}
    </Select>
  </Fragment>
}

const mapDispatchToProps = dispatch => ({
  setSymbol: (val) => dispatch(setSymbol(val)),
})

const mapStateToProps = state => ({
  symbol: state.entry.symbol
})

export default connect(mapStateToProps, mapDispatchToProps)(Symbol);