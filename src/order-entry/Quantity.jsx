import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { InputNumber, Typography } from 'antd';

import Constants from '../content/constants';
import { setQuantity } from '../infrastructure/actions';

const { Text } = Typography;
const Quantity = props => {
  const { entryLabels } = Constants;
  const { quantity } = props;

  const handleQuantityChange = (e) => {
    props.setQuantity(e)
  }

  return <Fragment>
    <div><Text strong>{entryLabels.quantity}</Text></div>
    <InputNumber 
      className='stdInputWidth'
      min={1}
      max={999}
      onChange={handleQuantityChange}
      placeholder={entryLabels.phQuantity}
      value={quantity} />
  </Fragment>
}

Quantity.propTypes = {
  quantity: PropTypes.string,
  setQuantity: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  setQuantity: (val) => dispatch(setQuantity(val)),
})

const mapStateToProps = state => ({
  quantity: state.entry.quantity
})

export default connect(mapStateToProps, mapDispatchToProps)(Quantity);