import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { setOrderType, setPrice, setStopPrice } from '../infrastructure/actions';
import { Menu, Button, Dropdown, Typography } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { Text } = Typography;
const orderTypeAttributes = {
  MARKET: { displayText: 'Market' },
  LIMIT: { displayText: 'Limit' },
  orderType: { displayText: 'select order type' },
}

const OrderType = props => {
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

  const { orderType } = props;
  return <Fragment>
    <div><Text strong>Order Type</Text></div>
    <Dropdown overlay={orderTypeMenu} placement="bottomCenter">
      <Button style={{ width: 200 }}>
        <div className='justifiedDiv'>{orderTypeAttributes[orderType].displayText} <DownOutlined /></div>
      </Button>
    </Dropdown>
  </Fragment>
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