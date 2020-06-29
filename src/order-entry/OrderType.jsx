import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Menu, Button, Dropdown, Typography } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import Constants from '../content/constants';
import { setOrderType, setPrice, setStopPrice } from '../infrastructure/actions';

const { Text } = Typography;
const OrderType = props => {
  const { orderTypeMenu: orderTypes, entryLabels } = Constants;
  const { orderType } = props;

  const handleOrderTypeChange = (e) => {
    props.setOrderType(e.item.props.value);
    if (e.item.props.value !== 'LIMIT') {
      props.setPrice(null);
      props.setStopPrice(null);
    }
  }

  const orderTypeMenu = (
    <Menu onClick={handleOrderTypeChange}>
      <Menu.Item value='MARKET'>Market</Menu.Item>
      <Menu.Item value='LIMIT'>Limit</Menu.Item>
    </Menu>
  )

  return <Fragment>
    <div><Text strong>{entryLabels.orderType}</Text></div>
    <Dropdown overlay={orderTypeMenu} placement="bottomCenter">
      <Button className='stdInputWidth'>
        <div className='justifiedDiv'>
          {orderTypes[orderType].displayText} <DownOutlined />
        </div>
      </Button>
    </Dropdown>
  </Fragment>
}

OrderType.propTypes = {
  orderType: PropTypes.string,
  setOrderType: PropTypes.func.isRequired,
  setPrice: PropTypes.func.isRequired,
  setStopPrice: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  setOrderType: (val) => dispatch(setOrderType(val)),
  setPrice: (val) => dispatch(setPrice(val)),
  setStopPrice: (val) => dispatch(setStopPrice(val)),
})

const mapStateToProps = state => ({
  orderType: state.entry.orderType
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderType);