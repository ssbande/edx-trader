import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

import Constants from '../content/constants';
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
  const { gutterConfig } = Constants
  return <section style={{ marginBottom: 30 }}>
    <EntryHeader />
    <Row className='topSmallMargin' gutter={gutterConfig} justify="center">
      <Col className="gutter-row topSmallMargin"><Action /></Col>
      <Col className="gutter-row topSmallMargin"><Symbol /></Col>
      <Col className="gutter-row topSmallMargin"><Quantity /></Col>
    </Row>
    <Row className='topSmallMargin' gutter={gutterConfig} justify="center">
      <Col className="gutter-row topSmallMargin"><OrderType /></Col>
      <Col className="gutter-row topSmallMargin"><Price /></Col>
      <Col className="gutter-row topSmallMargin"><StopPrice /></Col>
    </Row>
    <Row className='topSmallMargin' gutter={gutterConfig} justify="center">
      <Col className="gutter-row topSmallMargin"><Comment /></Col>
      <Col className="gutter-row topSmallMargin"><Tif /></Col>
      <Col className="gutter-row topSmallMargin"><Submit setLoader={props.setLoader}/></Col>
    </Row>
  </section>
}

EntryContainer.propTypes = {
  setLoader: PropTypes.func.isRequired
}

export default EntryContainer

