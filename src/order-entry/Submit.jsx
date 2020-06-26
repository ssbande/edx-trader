import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

const SubmitEntry = props => {
  console.log('props: ', props);
  const { orderType, action, symbol, quantity, price, stopPrice } = props;
  const isSubmitEnabled = (orderType === 'LIMIT' && action !== 'action' && !!symbol && !!quantity && !!price && !!stopPrice)
    || (orderType === 'MARKET' && action !== 'action' && !!symbol && !!quantity)

  return <Button
    type='primary'
    disabled={!isSubmitEnabled}
    style={{ width: 200, height: 54 }}
    size='large'>
    Submit
</Button>
}

const mapDispatchToProps = dispatch => ({
  // setComment: (val) => dispatch(setComment(val)),
})

const mapStateToProps = state => ({
  orderType: state.entry.orderType,
  action: state.entry.action,
  symbol: state.entry.symbol,
  quantity: state.entry.quantity,
  price: state.entry.price,
  stopPrice: state.entry.stopPrice
})

export default connect(mapStateToProps, mapDispatchToProps)(SubmitEntry);