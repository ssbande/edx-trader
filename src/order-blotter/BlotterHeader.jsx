import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Typography } from 'antd';

import Constants from '../content/constants';
const { Text } = Typography;

const BlotterHeader = (props) => {
  const { lastUpdatedDate } = props;
  return <Row className='sectionHeader' gutter={Constants.gutterConfig}>
    <Col className="gutter-row" span={10}>
      <div className='headText'>{Constants.blotterHeading}</div>
    </Col>
    <Col className="gutter-row" span={14}>
      {!!lastUpdatedDate
        ? <div className='rightAlign'>
          <div><Text type="warning" strong>
            {Constants.lastUpdatedHeading}
          </Text></div>
          <Text type="secondary" className='subText'>
            {lastUpdatedDate}
          </Text>
        </div>
        : null}
    </Col>
  </Row>
}

BlotterHeader.propTypes = {
  lastUpdatedDate: PropTypes.string
}

export default BlotterHeader