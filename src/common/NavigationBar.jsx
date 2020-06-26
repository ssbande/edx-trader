import React, { Component } from 'react';
import { Layout, Menu, Drawer, Button } from 'antd';
import { selectMenu, setIsMobileView } from '../infrastructure/actions';
import { StockOutlined, BarsOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

class NavigationBar extends Component {
	mobileWidth = 768;
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
			isMobileMenu: window.innerWidth < this.mobileWidth,
			width: window.innerWidth
		}, () => this.props.setIsMobileView(window.innerWidth < this.mobileWidth));
	}

	toggleMobileMenu = () => {
		this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen })
	}

	renderNavLinks = () => {
		return [
			<Menu.Item key="1" onClick={() => this.selectPanel('1', this.props.ticketPanelTop)}>Order Entry</Menu.Item>,
			<Menu.Item key="2" onClick={() => this.selectPanel('2', this.props.dataGridPanelTop)}>Order Blotter</Menu.Item>
		]
	}

	renderMobileNavLinks = () => {
		this.renderNavLinks();
	}

	selectPanel = (section, ref) => {
		this.props.selectMenu(section)
		if (this.state.mobileMenuOpen) {
			this.toggleMobileMenu();
		}

		window.scrollTo({
			top: ref,
			left: 0,
			behavior: 'smooth'
		});
	}

	render() {
		const { mobileMenuOpen, isMobileMenu } = this.state;
		return (
			<div>
				{isMobileMenu && <Drawer title='EDX Trader' placement='left' closable onClose={this.toggleMobileMenu} visible={mobileMenuOpen}>
					<Menu>{this.renderNavLinks()}</Menu>
				</Drawer>}
				<Layout.Header className='appHeader'>
					<div className='logo'><StockOutlined /> EDX Trader</div>
					<Menu className='appMenu' mode="horizontal" defaultSelectedKeys={['1']} selectedKeys={this.props.selectedMenu}>
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

