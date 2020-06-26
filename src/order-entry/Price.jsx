import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { setPrice } from '../infrastructure/actions';
import { InputNumber, Typography } from 'antd';

const { Text } = Typography;
const Quantity = props => {
  const handlePriceChange = (e) => {
    props.setPrice(e)
  }

  const { price, orderType } = props;
  return <Fragment>
    <div><Text strong>Price</Text></div>
    <InputNumber 
      disabled={orderType !== 'LIMIT'} 
      precision={2} 
      style={{ width: 200 }} 
      min={1} 
      step={0.5} 
      onChange={handlePriceChange} 
      placeholder='Enter Price' 
      value={price} />
  </Fragment>
}

const mapDispatchToProps = dispatch => ({
  setPrice: (val) => dispatch(setPrice(val)),
})

const mapStateToProps = state => ({
  price: state.entry.price,
  orderType: state.entry.orderType
})

export default connect(mapStateToProps, mapDispatchToProps)(Quantity);