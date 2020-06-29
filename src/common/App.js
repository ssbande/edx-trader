import React from 'react';
import { Layout } from 'antd';

import ContentHolder from './ContenHolder';
import NavigationBar from './NavigationBar';
import '../content/App.css';
import constants from '../content/constants';

const { Content, Footer } = Layout;

const App = () => {
  return <Layout className="layout">
    <NavigationBar />
    <Content className='appContent'>
      <div className="site-layout-content appContainer">
        <ContentHolder />
      </div>
    </Content>
    <Footer className='appFooter'>
      {constants.appFooterText}
    </Footer>
  </Layout>
}

export default App;