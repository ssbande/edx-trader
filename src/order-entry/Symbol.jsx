import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Select, Typography } from 'antd';
import { connect } from 'react-redux';

import Constants from '../content/constants';
import { setSymbol } from '../infrastructure/actions';

const { Text } = Typography;
const { Option } = Select;

const Symbol = props => {
  const { entryLabels, symbolTickers } = Constants;
  const createSymbolList = () => symbolTickers.map(symbol => {
    return <Option key={symbol} value={symbol}>{symbol}</Option>
  })

  const handleSymbolChange = (value) => {
    props.setSymbol(value)
  }

  return <Fragment>
    <div><Text strong>{entryLabels.symbol}</Text></div>
    <Select
      showArrow={false}
      showSearch
      className='stdInputWidth'
      placeholder={entryLabels.phSymbol}
      optionFilterProp="children"
      onChange={handleSymbolChange}
      value={props.symbol}
      notFoundContent={<div>Not found</div>}
      filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
    >
      {createSymbolList()}
    </Select>
  </Fragment>
}

Symbol.propTypes = {
  symbol: PropTypes.string,
  setSymbol: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  setSymbol: (val) => dispatch(setSymbol(val)),
})

const mapStateToProps = state => ({
  symbol: state.entry.symbol
})

export default connect(mapStateToProps, mapDispatchToProps)(Symbol);