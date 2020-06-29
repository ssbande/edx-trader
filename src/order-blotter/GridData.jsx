import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import Constants from '../content/constants';
import NoOrders from './NoOrder';

const GridData = props => {
  const { isMobileView, rowData } = props;
  return <Row gutter={Constants.gutterConfig}>
    <Col className="gutter-row" span={24}>
      {rowData && rowData.length
        ? <div className="ag-theme-alpine gridContainer">
          <AgGridReact
            domLayout='autoHeight'
            pagination
            animateRows
            paginationPageSize={10}
            onGridReady={params => !isMobileView && params.api.sizeColumnsToFit()}
            onGridSizeChanged={params => !isMobileView && params.api.sizeColumnsToFit()} Î
            columnDefs={Constants.dataGridColDefs}
            rowData={rowData}
            tooltipShowDelay={0}>
          </AgGridReact>
        </div>
        : <NoOrders />}
    </Col>
  </Row>
}

GridData.propTypes = {
  isMobileView: PropTypes.bool.isRequired,
  rowData: PropTypes.arrayOf(PropTypes.shape({
    action: PropTypes.string.isRequired,
    comment: PropTypes.string,
    orderType: PropTypes.string.isRequired,
    price: PropTypes.number,
    quantity: PropTypes.number.isRequired,
    stopPrice: PropTypes.number,
    symbol: PropTypes.string.isRequired,
    tif: PropTypes.string
  })).isRequired
}

export default GridData;