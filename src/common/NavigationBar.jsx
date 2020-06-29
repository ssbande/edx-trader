import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Layout, Menu, Drawer, Button } from 'antd';
import { StockOutlined, BarsOutlined } from '@ant-design/icons';

import Constants from '../content/constants';
import { selectMenu, setIsMobileView } from '../infrastructure/actions';

class NavigationBar extends Component {
	state = {
		isMobileMenu: false,
		mobileMenuOpen: false,
		width: 0
	}

	componentDidMount() {
		window.addEventListener('resize', this.updateWindowDimensions);
		this.updateWindowDimensions();
	}

	updateWindowDimensions = () => {
		this.setState({
			isMobileMenu: window.innerWidth < Constants.mobileWidth,
			width: window.innerWidth
		}, this.props.setIsMobileView(window.innerWidth < Constants.mobileWidth));
	}

	toggleMobileMenu = () => {
		this.setState({
			mobileMenuOpen: !this.state.mobileMenuOpen
		})
	}

	renderNavLinks = () => {
		return [
			<Menu.Item key='1' onClick={this.selectPanel}>Order Entry</Menu.Item>,
			<Menu.Item key='2' onClick={this.selectPanel}>Order Blotter</Menu.Item>
		]
	}

	selectPanel = (e) => {
		this.props.selectMenu(e.key);
		if (this.state.mobileMenuOpen) {
			this.toggleMobileMenu();
		}

		window.scrollTo({
			top: e.key === '1'
				? this.props.ticketPanelTop
				: this.props.dataGridPanelTop,
			left: 0,
			behavior: 'smooth'
		});
	}

	render() {
		const { mobileMenuOpen, isMobileMenu } = this.state;
		return (
			<div>
				{isMobileMenu && <Drawer
					title={Constants.drawerHeader}
					placement='left'
					closable
					onClose={this.toggleMobileMenu}
					visible={mobileMenuOpen}>
					<Menu>{this.renderNavLinks()}</Menu>
				</Drawer>}
				<Layout.Header className='appHeader'>
					<div className='logo'>
						<StockOutlined /> {Constants.drawerHeader}
					</div>
					<Menu
						className='appMenu'
						mode="horizontal"
						selectedKeys={this.props.selectedMenu}>
						{!isMobileMenu && this.renderNavLinks()}
						{isMobileMenu && <Menu.Item key="3" className={`${isMobileMenu ? 'rightAppMenuItem' : ''}`}>
							<Button size="small" onClick={() => this.toggleMobileMenu()} icon={<BarsOutlined />} />
						</Menu.Item>}
					</Menu>
				</Layout.Header>
			</div>
		);
	}
}

NavigationBar.propTypes = {
	dataGridPanelTop: PropTypes.number,
	selectedMenu: PropTypes.arrayOf(PropTypes.string).isRequired,
	selectMenu: PropTypes.func.isRequired,
	setIsMobileView: PropTypes.func.isRequired,
	ticketPanelTop: PropTypes.number
}

const mapDispatchToProps = dispatch => ({
	selectMenu: (val) => dispatch(selectMenu(val)),
	setIsMobileView: (val) => dispatch(setIsMobileView(val)),
})

const mapStateToProps = state => ({
	dataGridPanelTop: state.common.panel2Top,
	selectedMenu: state.common.selectedMenu,
	ticketPanelTop: 5
})

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)

