import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { setQuantity } from '../infrastructure/actions';
import { InputNumber, Typography } from 'antd';

const { Text } = Typography;
const Quantity = props => {
  const handleQuantityChange = (e) => {
    props.setQuantity(e)
  }

  const { quantity } = props;
  return <Fragment>
    <div><Text strong>Quantity</Text></div>
    <InputNumber style={{ width: 200 }}
      min={1}
      max={999}
      onChange={handleQuantityChange}
      placeholder='Enter Quantity'
      value={quantity} />
  </Fragment>
}

const mapDispatchToProps = dispatch => ({
  setQuantity: (val) => dispatch(setQuantity(val)),
})

const mapStateToProps = state => ({
  quantity: state.entry.quantity
})

export default connect(mapStateToProps, mapDispatchToProps)(Quantity);