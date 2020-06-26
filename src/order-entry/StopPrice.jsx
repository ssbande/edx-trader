import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { setStopPrice } from '../infrastructure/actions';
import { InputNumber, Typography } from 'antd';

const { Text } = Typography;
const Quantity = props => {
  const handleStopPriceChange = (e) => {
    props.setStopPrice(e)
  }

  const { stopPrice, orderType } = props;
  return <Fragment>
    <div><Text strong>Stop Price</Text></div>
    <InputNumber 
      disabled={orderType !== 'LIMIT'} 
      precision={2} 
      style={{ width: 200 }} 
      min={1} max={999} 
      onChange={handleStopPriceChange} 
      placeholder='Enter Stop Price' 
      value={stopPrice} />
  </Fragment>
}

const mapDispatchToProps = dispatch => ({
  setStopPrice: (val) => dispatch(setStopPrice(val)),
})

const mapStateToProps = state => ({
  stopPrice: state.entry.stopPrice,
  orderType: state.entry.orderType
})

export default connect(mapStateToProps, mapDispatchToProps)(Quantity);