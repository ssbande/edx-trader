import React from 'react';
import { Row, Col } from 'antd';
import '../content/Site.css';
import EntryHeader from './EntryHeader';
import Action from './Actions';
import Symbol from './Symbol';
import Quantity from './Quantity';
import OrderType from './OrderType';
import Price from './Price';
import StopPrice from './StopPrice';
import Comment from './Comment';
import Tif from './Tif';
import Submit from './Submit';

const EntryContainer = props => {
  const gutter = { xs: 8, sm: 16, md: 24, lg: 32 }
  return <section style={{ marginBottom: 30 }}>
    <EntryHeader />
    <Row className='topSmallMargin' gutter={gutter} justify="center">
      <Col className="gutter-row topSmallMargin"><Action /></Col>
      <Col className="gutter-row topSmallMargin"><Symbol /></Col>
      <Col className="gutter-row topSmallMargin"><Quantity /></Col>
    </Row>
    <Row className='topSmallMargin' gutter={gutter} justify="center">
      <Col className="gutter-row topSmallMargin"><OrderType /></Col>
      <Col className="gutter-row topSmallMargin"><Price /></Col>
      <Col className="gutter-row topSmallMargin"><StopPrice /></Col>
    </Row>
    <Row className='topSmallMargin' gutter={gutter} justify="center">
      <Col className="gutter-row topSmallMargin"><Comment /></Col>
      <Col className="gutter-row topSmallMargin"><Tif /></Col>
      <Col className="gutter-row topSmallMargin"><Submit /></Col>
    </Row>
  </section>
}

export default EntryContainer

