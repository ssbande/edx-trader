import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Typography, Empty, Modal } from 'antd';
import '../content/Site.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const { Text } = Typography;

class BlotterContainer extends Component {
  state = {
    showErrModal: false,
    columnDefs: [
      {
        headerName: "Action", field: "action", sortable: true, cellClassRules: {
          'redBack': function (params) { return params.value.toLowerCase() === 'sell' },
          'redGreen': function (params) { return params.value.toLowerCase() === 'buy' }
        }
      },
      { headerName: "Symbol", field: "symbol", sortable: true },
      { headerName: "Qty", field: "quantity", sortable: true },
      { headerName: "Order Type", field: "orderType", sortable: true },
      { headerName: "TIF", field: "tif", sortable: true },
      { headerName: "Price", field: "price", sortable: true },
      { headerName: "Stop Price", field: "stopPrice", sortable: true },
      {
        headerName: "Comment", field: "comment", sortable: true,
        tooltipField: 'comment',
        tooltipComponentParams: { color: 'dodgerblue' },
      }
    ],
    rowData: []
  }

  componentDidUpdate(prev) {
    if (this.props.orders.length > prev.orders.length && this.props.orders.length !== 0) {
      this.setState({
        rowData: this.props.orders
      }, this.props.setLoader(false));
    }

    if (!this.props.orderSubmitSuccess && this.props.orderSubmitSuccess !== prev.orderSubmitSuccess) {
      this.props.setLoader(false);
      this.setState({showErrModal: true})
    }
  }

  errorModal = () => {
    Modal.error({
      title: 'Order time has elapsed',
      content: `Please try creating another order ... `,
      onOk: () => this.setState({showErrModal: false})
    });
  }

  render() {
    return <section style={{ marginTop: '15px' }}>
      {this.state.showErrModal && <div>{this.errorModal()}</div>}
      <Row className='sectionHeader' gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={10}>
          <div className='headText'>Order Blotter</div>
        </Col>
        <Col className="gutter-row" span={14}>
          {this.state.rowData && this.state.rowData.length
            ? <div className='rightAlign'>
              <div><Text type="warning" strong>Last Updated</Text></div>
              <Text type="secondary" className='subText'>{this.props.lastUpdatedDate}</Text>
            </div>
            : null}
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={24}>
          {this.state.rowData && this.state.rowData.length
            ? <div className="ag-theme-alpine gridContainer">
              <AgGridReact
                domLayout='autoHeight'
                pagination
                animateRows
                paginationPageSize={10}
                onGridReady={params => !this.props.isMobileView && params.api.sizeColumnsToFit()}
                onGridSizeChanged={params => !this.props.isMobileView && params.api.sizeColumnsToFit()}
                columnDefs={this.state.columnDefs}
                rowData={this.state.rowData}
                tooltipShowDelay={0}>
              </AgGridReact>
            </div>
            : <div className='centerAlign padded topSmallMargin'>
              <Empty description={
                <Text type='secondary' style={{ fontSize: '30px' }}>No Orders yet</Text>
              } />
            </div>}
        </Col>
      </Row>
    </section>
  }
}

const mapDispatchToProps = dispatch => ({

})

const mapStateToProps = state => ({
  orders: state.orders.orders,
  isMobileView: state.common.isMobileView,
  lastUpdatedDate: state.orders.lastUpdatedDate,
  orderSubmitSuccess: state.orders.orderSubmitSuccess,
  sessionOrderCount: state.orders.sessionOrderCount
})

export default connect(mapStateToProps, mapDispatchToProps)(BlotterContainer)

