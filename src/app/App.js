import React from 'react';
import { Layout } from 'antd';
import NavigationBar from './../common/NavigationBar';
import ContentHolder from './../common/ContenHolder';
import '../content/App.css';

const { Content, Footer } = Layout;

const App = () => {
  return <Layout className="layout">
    <NavigationBar />
    <Content className='appContent'>
      <div className="site-layout-content appContainer">
        <ContentHolder />
      </div>
    </Content>
    <Footer className='appFooter'>JPM Assignment ©2020 Created by Shreyas Bande</Footer>
  </Layout>
}
export default App;