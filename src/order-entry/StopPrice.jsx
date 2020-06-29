import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { InputNumber, Typography } from 'antd';

import Constants from '../content/constants';
import { setStopPrice } from '../infrastructure/actions';

const { Text } = Typography;
const StopPrice = props => {
  const { entryLabels } = Constants;
  const { stopPrice, orderType } = props;

  const handleStopPriceChange = (e) => {
    props.setStopPrice(e)
  }

  return <Fragment>
    <div><Text strong>{entryLabels.stopPrice}</Text></div>
    <InputNumber
      disabled={orderType !== 'LIMIT'}
      precision={2}
      className='stdInputWidth'
      min={1}
      step={0.5}
      onChange={handleStopPriceChange}
      placeholder={entryLabels.phStopPrice}
      value={stopPrice} />
  </Fragment>
}

StopPrice.propTypes = {
  orderType: PropTypes.string.isRequired,
  stopPrice: PropTypes.string,
  setStopPrice: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  setStopPrice: (val) => dispatch(setStopPrice(val)),
})

const mapStateToProps = state => ({
  stopPrice: state.entry.stopPrice,
  orderType: state.entry.orderType
})

export default connect(mapStateToProps, mapDispatchToProps)(StopPrice);