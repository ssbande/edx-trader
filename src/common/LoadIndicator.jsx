import React from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'antd';

import Constants from '../content/constants';

const LoadIndicator = ({ loadPercent }) => {
  return <div className='orderSpinner'>
    <Progress percent={loadPercent} showInfo={false} strokeColor={Constants.strokeColor} />
    <div>{Constants.loaderText}</div>
  </div>
};

LoadIndicator.propTypes = {
  loadPercent: PropTypes.number.isRequired
}

export default LoadIndicator;