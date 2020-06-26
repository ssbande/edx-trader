import React from 'react';
import { connect } from 'react-redux';
import SplitPane, { Pane } from 'react-split-pane';
import { changePanelHeight, selectMenu } from '../infrastructure/actions';
import OrderEntry from '../order-entry/EntryContainer';
import OrderBlotter from '../order-blotter/BlotterContainer';
import '../content/PaneStyles.css';

const ContentHolder = (props) => {
	const dragFinished = (e) => {
		props.changePanelHeight(e)
	}

	return <div className='panelHolder'>
		<div className="parent">
			<div className="wrapper">
				<SplitPane split="horizontal" style={{ position: 'relative' }} onDragFinished={dragFinished}>
					<Pane id='ticketHolder' ref={props.ticketPanel} className='' style={{ overflow: 'auto' }} >
						<OrderEntry />
					</Pane>
					<Pane id='dataGridHolder' ref={props.dataGridPanel} className=''>
						<OrderBlotter />
					</Pane>
				</SplitPane>
			</div>
		</div>
	</div>
}

const mapDispatchToProps = dispatch => ({
	changePanelHeight: (val) => dispatch(changePanelHeight(val)),
	selectMenu: (val) => dispatch(selectMenu(val)),
})

const mapStateToProps = state => {
	return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentHolder);