import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { InputNumber, Typography } from 'antd';

import Constants from '../content/constants';
import { setPrice } from '../infrastructure/actions';

const { Text } = Typography;
const Price = props => {
  const { entryLabels } = Constants;
  const { price, orderType } = props;

  const handlePriceChange = (e) => {
    props.setPrice(e)
  }

  return <Fragment>
    <div><Text strong>{entryLabels.price}</Text></div>
    <InputNumber
      disabled={orderType !== 'LIMIT'}
      precision={2}
      className='stdInputWidth'
      min={1}
      step={0.5}
      onChange={handlePriceChange}
      placeholder={entryLabels.phPrice}
      value={price} />
  </Fragment>
}

Price.propTypes = {
  orderType: PropTypes.string.isRequired,
  price: PropTypes.string,
  setPrice: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  setPrice: (val) => dispatch(setPrice(val)),
})

const mapStateToProps = state => ({
  price: state.entry.price,
  orderType: state.entry.orderType
})

export default connect(mapStateToProps, mapDispatchToProps)(Price);