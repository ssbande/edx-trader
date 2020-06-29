import React from 'react';
import { Typography, Empty } from 'antd';

import Constants from '../content/constants'

const NoOrders = () => {
  return <div className='centerAlign padded topSmallMargin'>
    <Empty description={
      <Typography.Text type='secondary' style={{ fontSize: '30px' }}>
        {Constants.noOrderText}
      </Typography.Text>
    } />
  </div>
}

export default NoOrders;