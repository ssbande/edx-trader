import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Dropdown, Button, Typography, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { setAction } from '../infrastructure/actions';

const { Text } = Typography;
const actionAttributes = {
  BUY: { color: '#00A86B', displayText: 'Buy' },
  SELL: { color: '#ff0038', displayText: 'Sell' },
  action: { color: '', displayText: 'Please select an action' },
}

const Actions = props => {
  const handleActionChange = (e) => {
    props.setAction(e.item.props.value);
  }

  const actionMenu = (
    <Menu onClick={handleActionChange}>
      <Menu.Item value='BUY'>Buy</Menu.Item>
      <Menu.Item value='SELL'>Sell</Menu.Item>
    </Menu>
  );

  const { action } = props;
  return <Fragment>
    <div><Text strong>Action</Text></div>
    <Dropdown overlay={actionMenu} placement="bottomCenter">
      <Button type='primary' style={{
        width: 200,
        backgroundColor: actionAttributes[action].color,
        borderColor: actionAttributes[action].color
      }}><div className='justifiedDiv'>{actionAttributes[action].displayText} <DownOutlined /></div>
      </Button>
    </Dropdown>
  </Fragment>
}

const mapDispatchToProps = dispatch => ({
  setAction: (val) => dispatch(setAction(val)),
})

const mapStateToProps = state => ({
  action: state.entry.action
})
export default connect(mapStateToProps, mapDispatchToProps)(Actions);