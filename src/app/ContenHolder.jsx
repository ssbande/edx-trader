import React, { useState } from 'react';
import { connect } from 'react-redux';
import SplitPane, { Pane } from 'react-split-pane';
import { changePanelHeight, selectMenu } from '../infrastructure/actions';
import { Spin, Progress } from 'antd';
import OrderEntry from '../order-entry/EntryContainer';
import OrderBlotter from '../order-blotter/BlotterContainer';
import '../content/PaneStyles.css';

const ContentHolder = (props) => {
	const [submittingOrder, setSubmittingOrder] = useState(false);
	const [loadPercent, setLoadPercent] = useState(0);

	let int;
	const startLoader = (val) => {
		setLoadPercent(0);
		setSubmittingOrder(val);
		clearInterval(int);
		if (val) {
			int = setInterval(() => {
				setLoadPercent(prevPercent => {
					if (prevPercent + 5 === 100) {
						clearInterval(int);
					}
					return prevPercent + 5
				});

			}, 100);
		}
	}

	const dragFinished = (e) => {
		props.changePanelHeight(e)
	}

	const LoadIndicator = <div className='orderSpinner'>
		<Progress percent={loadPercent} showInfo={false} strokeColor={{'0%': '#108ee9', '100%': '#87d068'}} />
		<div>Submitting Order ... </div>
	</div>

	return <Spin indicator={LoadIndicator} spinning={submittingOrder}>
		<div className='panelHolder'>
			<div className="parent">
				<div className="wrapper">
					<SplitPane split="horizontal" style={{ position: 'relative' }} onDragFinished={dragFinished}>
						<Pane id='ticketHolder' className='' style={{ overflow: 'auto' }} >
							<OrderEntry setLoader={(val) => startLoader(val)} />
						</Pane>
						<Pane id='dataGridHolder' className=''>
							<OrderBlotter setLoader={(val) => startLoader(val)} />
						</Pane>
					</SplitPane>
				</div>
			</div>
		</div>
	</Spin>
}

const mapDispatchToProps = dispatch => ({
	changePanelHeight: (val) => dispatch(changePanelHeight(val)),
	selectMenu: (val) => dispatch(selectMenu(val)),
})

const mapStateToProps = state => ({})
export default connect(mapStateToProps, mapDispatchToProps)(ContentHolder);