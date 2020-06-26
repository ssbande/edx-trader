import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Typography } from 'antd';
import { MehTwoTone } from '@ant-design/icons';
import '../content/Site.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const { Text } = Typography;

class BlotterContainer extends Component {
  state = {
    columnDefs: [
      {
        headerName: "Action", field: "action", sortable: true, cellClassRules: {
          'redBack': function (params) { return params.value === 'Sell' },
          'redGreen': function (params) { return params.value === 'Buy' }
        }
      },
      { headerName: "Symbol", field: "symbol", sortable: true },
      { headerName: "Qty", field: "qty", sortable: true },
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
    rowData: [
      { action: 'Buy', symbol: 'MSFT', qty: 50, orderType: 'Limit', tif: 'GTC', stopPrice: 100.25, comment: 'some Comment', price: 72000 },
      { action: 'Sell', symbol: 'MSFT', qty: 50, orderType: 'Limit', tif: 'GTC', stopPrice: 100.25, comment: 'some Comment', price: 78000 },
    ]
    // rowData: []
  }

  render() {
    return <section style={{ marginTop: '15px' }}>
      <Row className='sectionHeader' gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={10}>
          <div className='headText'>Order Blotter</div>
        </Col>
        <Col className="gutter-row" span={14}>
          {this.state.rowData && this.state.rowData.length
            ? <div className='rightAlign'>
              <div><Text type="warning" strong>Last Updated</Text></div>
              <Text type="secondary" className='subText'>2020-06-22 10:27:11 PM</Text>
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
                paginationPageSize={10}
                onGridReady={params => !this.props.common.isMobileView && params.api.sizeColumnsToFit()}
                onGridSizeChanged={params => !this.props.common.isMobileView && params.api.sizeColumnsToFit()}
                columnDefs={this.state.columnDefs}
                rowData={this.state.rowData}
                tooltipShowDelay={0}>
              </AgGridReact>
            </div>
            : <div className='centerAlign padded'>
              <MehTwoTone style={{ fontSize: '16px' }}/> No Orders yet
            </div>}
        </Col>
      </Row>
    </section>
  }
}

const mapDispatchToProps = dispatch => ({

})

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps, mapDispatchToProps)(BlotterContainer)

