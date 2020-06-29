import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal } from 'antd';

import Constants from '../content/constants';
import '../content/Site.css';
import BlotterHeader from './BlotterHeader';
import GridData from './GridData';

class BlotterContainer extends Component {
  state = {
    showErrModal: false
  }

  componentDidUpdate(prev) {
    if (this.props.orders.length > prev.orders.length
      && this.props.orders.length !== 0) {
      this.props.setLoader(false)
    }

    if (!this.props.orderSubmitSuccess
      && this.props.orderSubmitSuccess !== prev.orderSubmitSuccess) {
      this.props.setLoader(false);
      this.setState({ showErrModal: true })
    }
  }

  errorModal = () => {
    Modal.error({
      title: Constants.failedOrderModalTitle,
      content: Constants.failedOrderModalContent,
      onOk: () => this.setState({ showErrModal: false })
    });
  }

  render() {
    return <section style={{ marginTop: '15px' }}>
      {this.state.showErrModal && <div>{this.errorModal()}</div>}
      <BlotterHeader lastUpdatedDate={this.props.lastUpdatedDate} />
      <GridData
        rowData={this.props.orders}
        isMobileView={this.props.isMobileView} />
    </section>
  }
}

BlotterContainer.propTypes = {
  isMobileView: PropTypes.bool.isRequired,
  lastUpdatedDate: PropTypes.string,
  orderSubmitSuccess: PropTypes.bool,
  orders: PropTypes.arrayOf(PropTypes.shape({
    action: PropTypes.string.isRequired,
    comment: PropTypes.string,
    orderType: PropTypes.string.isRequired,
    price: PropTypes.number,
    quantity: PropTypes.number.isRequired,
    stopPrice: PropTypes.number,
    symbol: PropTypes.string.isRequired,
    tif: PropTypes.string
  })).isRequired,
  sessionOrderCount: PropTypes.number,
  setLoader: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  orders: state.orders.orders,
  isMobileView: state.common.isMobileView,
  lastUpdatedDate: state.orders.lastUpdatedDate,
  orderSubmitSuccess: state.orders.orderSubmitSuccess,
  sessionOrderCount: state.orders.sessionOrderCount
})

export default connect(mapStateToProps)(BlotterContainer)

