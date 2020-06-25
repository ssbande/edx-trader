import React from 'react';
import { connect } from 'react-redux';
import SplitPane, { Pane } from 'react-split-pane';
import { changePanelHeight, selectMenu } from '../infrastructure/actions';
import '../content/PaneStyles.css';

const ContentHolder = (props) => {
	const dragFinished = (e) => {
		props.changePanelHeight(e)
	}

	return <div className='panelHolder'>
		<div className="parent">
			<div className="wrapper">
				<SplitPane split="horizontal" style={{ position: 'relative' }} onDragFinished={dragFinished}>
					<Pane id='ticketHolder' ref={props.ticketPanel} className='' style={{ minHeight: '200px' }}>This Pane has a minimum size of 200px</Pane>
					<Pane id='dataGridHolder' ref={props.dataGridPanel} className=''>Order Blotter</Pane>
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