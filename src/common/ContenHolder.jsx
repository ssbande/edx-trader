import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import SplitPane, { Pane } from 'react-split-pane';
import { Spin } from 'antd';

import LoadIndicator from './LoadIndicator';
import Constants from '../content/constants';
import '../content/PaneStyles.css';
import { changePanelHeight } from '../infrastructure/actions';
import OrderEntry from '../order-entry/EntryContainer';
import OrderBlotter from '../order-blotter/BlotterContainer';

const ContentHolder = (props) => {
	const [submittingOrder, setSubmittingOrder] = useState(false);
	const [loadPercent, setLoadPercent] = useState(0);

	const startLoader = (val) => {
		setLoadPercent(0);
		setSubmittingOrder(val);
		if (val) {
			/**
			 * If the loader is starting (val is true), 
			 * increase the percentage by 5 (percentIncrementValue), every 100ms (percentIncrementTimeInterval). 
			 * That way, the loader will be finished completely in 2 seconds (loaderTimeDuration). 
			 */
			const int = setInterval(() => {
				setLoadPercent(prevPercent => {
					const newPercent = prevPercent + Constants.percentIncrementValue;
					if (newPercent === Constants.percentTotal) clearInterval(int);
					return newPercent;
				});
			}, Constants.percentIncrementTimeInterval);
		}
	}

	const dragFinished = (e) => props.changePanelHeight(e)
	
	return <Spin indicator={<LoadIndicator loadPercent={loadPercent}/>} spinning={submittingOrder}>
		<div className='panelHolder'>
			<div className="parent">
					<SplitPane split="horizontal" style={{ position: 'relative' }} onDragFinished={dragFinished}>
						<Pane id='ticketHolder' className='autoOverflow' >
							<OrderEntry setLoader={(val) => startLoader(val)} />
						</Pane>
						<Pane id='dataGridHolder' className=''>
							<OrderBlotter setLoader={(val) => startLoader(val)} />
						</Pane>
					</SplitPane>
			</div>
		</div>
	</Spin>
}

ContentHolder.propTypes = {
	changePanelHeight: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
	changePanelHeight: (val) => dispatch(changePanelHeight(val))
})

const mapStateToProps = state => ({})
export default connect(mapStateToProps, mapDispatchToProps)(ContentHolder);