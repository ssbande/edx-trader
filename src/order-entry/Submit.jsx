import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'antd';

import Constants from '../content/constants';
import { submitOrder, clearData } from '../infrastructure/actions';

const SubmitEntry = props => {
  const { entryLabels } = Constants;
  const { orderType, action, symbol, quantity, price, stopPrice } = props;
  const isSubmitEnabled = (orderType === 'LIMIT'
    && action !== 'action'
    && !!symbol
    && !!quantity
    && !!price
    && !!stopPrice)
    || (orderType === 'MARKET'
      && action !== 'action'
      && !!symbol
      && !!quantity)

  const handleSubmit = () => {
    const { tif, comment, setLoader, submitOrder, clearData } = props;
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
    className='stdInputWidth'
    type='primary'
    disabled={!isSubmitEnabled}
    style={{ height: 54 }}
    onClick={handleSubmit}
    size='large'>
    {entryLabels.submit}
  </Button>
}

SubmitEntry.propTypes = {
  action: PropTypes.string.isRequired,
  clearData: PropTypes.func.isRequired,
  comment: PropTypes.string,
  orderType: PropTypes.string.isRequired,
  price: PropTypes.number,
  quantity: PropTypes.number,
  setLoader: PropTypes.func.isRequired,
  stopPrice: PropTypes.number,
  submitOrder: PropTypes.func.isRequired,
  symbol: PropTypes.string,
  tif: PropTypes.string
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