import React from 'react';
import { Row, Col } from 'antd';

import Constants from '../content/constants';

const EntryHeader = () => {
  return <Row className='sectionHeader' gutter={Constants.gutterConfig}>
    <Col className="gutter-row" span={12}>
      <div className='headText'>{Constants.entryLabels.heading}</div>
    </Col>
  </Row>
}

export default EntryHeader;