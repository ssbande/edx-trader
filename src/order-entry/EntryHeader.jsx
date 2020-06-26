import React from 'react';
import { Row, Col } from 'antd';

const EntryHeader = () => {
  return <Row className='sectionHeader' gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
    <Col className="gutter-row" span={12}>
      <div className='headText'>Order Entry</div>
    </Col>
  </Row>
}

export default EntryHeader;