import React from 'react';
import { connect } from 'react-redux';
import { submitOrder, clearData } from '../infrastructure/actions';
import { Button } from 'antd';

const SubmitEntry = props => {
  const { orderType, action, symbol, quantity, price, stopPrice } = props;
  const isSubmitEnabled = (orderType === 'LIMIT' && action !== 'action' && !!symbol && !!quantity && !!price && !!stopPrice)
    || (orderType === 'MARKET' && action !== 'action' && !!symbol && !!quantity)

  const handleSubmit = () => {
    const { orderType, action, symbol, quantity, price, stopPrice, tif, comment, setLoader, submitOrder, clearData } = props;
    setLoader(true);
    setTimeout(() => {
      submitOrder({
        action, 
        symbol, 
        quantity, 
        orderType, 
        price, 
        stopPrice, 
        tif, 
        comment
      });
      clearData()
    }, 2200);
  }

  return <Button
    type='primary'
    disabled={!isSubmitEnabled}
    style={{ width: 200, height: 54 }}
    onClick={handleSubmit}
    size='large'>
    Submit
</Button>
}

const mapDispatchToProps = dispatch => ({
  submitOrder: (val) => dispatch(submitOrder(val)),
  clearData: () => dispatch(clearData()),
})

const mapStateToProps = state => ({
  orderType: state.entry.orderType,
  action: state.entry.action,
  symbol: state.entry.symbol,
  quantity: state.entry.quantity,
  price: state.entry.price,
  stopPrice: state.entry.stopPrice,
  tif: state.entry.tif,
  comment: state.entry.comment
})

export default connect(mapStateToProps, mapDispatchToProps)(SubmitEntry);