import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Dropdown, Button, Typography, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { setAction } from '../infrastructure/actions';
import Constants from '../content/constants';

const { Text } = Typography;
const Actions = props => {
  const { actionMenu: actions, entryLabels } = Constants;
  const selectedAction = props.action.toUpperCase();

  const handleActionChange = (e) => {
    props.setAction(actions[e.item.props.value].displayText);
  }

  const actionMenu = (
    <Menu onClick={handleActionChange}>
      <Menu.Item value='BUY'>Buy</Menu.Item>
      <Menu.Item value='SELL'>Sell</Menu.Item>
    </Menu>
  );

  return <Fragment>
    <div><Text strong>{entryLabels.action}</Text></div>
    <Dropdown overlay={actionMenu} placement="bottomCenter">
      <Button 
        type='primary' 
        className='stdInputWidth' 
        style={{
        backgroundColor: actions[selectedAction].color,
        borderColor: actions[selectedAction].color
      }}>
        <div className='justifiedDiv'>
          {actions[selectedAction].displayText} <DownOutlined />
        </div>
      </Button>
    </Dropdown>
  </Fragment>
}

Actions.propTypes = {
  action: PropTypes.string.isRequired,
  setAction: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  setAction: (val) => dispatch(setAction(val)),
})

const mapStateToProps = state => ({
  action: state.entry.action
})

export default connect(mapStateToProps, mapDispatchToProps)(Actions);