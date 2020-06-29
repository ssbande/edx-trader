import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Menu, Button, Dropdown, Typography } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import Constants from '../content/constants';
import { setTif } from '../infrastructure/actions';

const { Text } = Typography;
const Tif = props => {
  const { entryLabels } = Constants;
  const { tif } = props;

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

  return <Fragment>
    <div><Text strong>{entryLabels.tif}</Text></div>
    <Dropdown overlay={tifMenu} placement="bottomCenter">
      <Button className='stdInputWidth'>
        <div className='justifiedDiv'>{tif || entryLabels.phTif} <DownOutlined /></div>
      </Button>
    </Dropdown>
  </Fragment>
}

Tif.propTypes = {
  tif: PropTypes.string,
  setTif: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  setTif: (val) => dispatch(setTif(val))
})

const mapStateToProps = state => ({
  tif: state.entry.tif
})

export default connect(mapStateToProps, mapDispatchToProps)(Tif);