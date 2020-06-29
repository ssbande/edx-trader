export default {
  actionMenu: {
    BUY: { color: '#00A86B', displayText: 'Buy' },
    SELL: { color: '#ff0038', displayText: 'Sell' },
    ACTION: { color: '', displayText: 'Please select an action' },
  },
  appFooterText: 'JPM Assignment ©2020 Created by Shreyas Bande',
  blotterHeading: 'Order Blotter',
  dataGridColDefs: [
    {
      headerName: "Action",
      field: "action",
      sortable: true,
      cellClassRules: {
        'redBack': params => (params.value.toLowerCase() === 'sell'),
        'greenBack': params => (params.value.toLowerCase() === 'buy')
      }
    },
    { headerName: "Symbol", field: "symbol", sortable: true },
    { headerName: "Qty", field: "quantity", sortable: true },
    { headerName: "Order Type", field: "orderType", sortable: true },
    { headerName: "TIF", field: "tif", sortable: true },
    { headerName: "Price", field: "price", sortable: true },
    { headerName: "Stop Price", field: "stopPrice", sortable: true },
    {
      headerName: "Comment",
      field: "comment",
      sortable: true,
      tooltipField: 'comment',
      tooltipComponentParams: {
        color: 'dodgerblue'
      },
    }
  ],
  drawerHeader: 'EDX Trader',
  entryLabels: {
    action: 'Action',
    comment: 'Comment',
    heading: 'Order Entry',
    orderType: 'Order Type',
    phComment: 'Enter Comment',
    phPrice: 'Enter Price',
    phQuantity: 'Enter Quantity',
    phStopPrice: 'Enter Stop Price',
    phSymbol: 'Select a symbol',
    phTif: 'Please select TIF',
    price: 'Price',
    quantity: 'Quantity',
    stopPrice: 'Stop Price',
    submit: 'Submit',
    symbol: 'Symbol',
    tif: 'TIF'
  },
  failOrderNumber: 10,
  failedOrderModalContent: 'Please try creating another order ... ',
  failedOrderModalTitle: 'Order time has elapsed',
  gutterConfig: { xs: 8, sm: 16, md: 24, lg: 32 },
  lastUpdatedHeading: 'Last Updated',
  lastUpdatedTimeFormat: 'YYYY-MM-DD hh:mm A',
  loaderText: 'Submitting Order ... ',
  loaderTimeDuration: 2100, // in milliseconds
  mobileWidth: 768,
  noOrderText: 'No Orders yet',
  orderTypeMenu: {
    MARKET: { displayText: 'Market' },
    LIMIT: { displayText: 'Limit' },
    orderType: { displayText: 'select order type' },
  },
  percentIncrementTimeInterval: 100, // in milliseconds
  percentIncrementValue: 5,
  percentTotal: 100,
  strokeColor: {
    '0%': '#108ee9',
    '100%': '#87d068'
  },
  symbolTickers: [
    'AAPL',
    'MSFT',
    'GOOGL',
    'VZ',
    'MMM',
    'NFLX',
    'FB',
    'TWTR',
    'AMZN',
    'EBAY'
  ]
}