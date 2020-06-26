import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { setTif } from '../infrastructure/actions';
import { Menu, Button, Dropdown, Typography } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { Text } = Typography;
const Tif = props => {
  const handleTifChange = (e) => {
    props.setTif(e.item.props.value);
  }

  const tifMenu = (
    <Menu onClick={handleTifChange}>
      <Menu.Item value='GTC'>GTC</Menu.Item>
      <Menu.Item value='DAY'>DAY</Menu.Item>
      <Menu.Item value='FOK'>FOK</Menu.Item>
      <Menu.Item value='IOC'>IOC</Menu.Item>
    </Menu>
  )

  const { tif } = props;
  return <Fragment>
    <div><Text strong>Order Type</Text></div>
    <Dropdown overlay={tifMenu} placement="bottomCenter">
      <Button style={{ width: 200 }}>
        <div className='justifiedDiv'>{tif || 'Please select TIF'} <DownOutlined /></div>
      </Button>
    </Dropdown>
  </Fragment>
}

const mapDispatchToProps = dispatch => ({
  setTif: (val) => dispatch(setTif(val))
})

const mapStateToProps = state => ({
  tif: state.entry.tif
})

export default connect(mapStateToProps, mapDispatchToProps)(Tif);