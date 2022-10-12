// import third-party modules
import { Layout, Menu } from '@arco-design/web-react';
import { Home, Info } from '@icon-park/react';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// import local modules
import Header from './Header';
import Footer from './Footer';

function PageLayout() {
  // return
  return (
    <Layout>
      <Header />
      <Layout>
        <Layout.Sider>
          <Menu
            style={{
              height: 'calc(100vh - 4rem)',
            }}
            defaultOpenKeys={['1']}
            defaultSelectedKeys={['1']}
          >
            <Link to={''}>
              <Menu.Item key="1">
                <Home />
                Home
              </Menu.Item>
            </Link>
            <Link to={'/about'}>
              <Menu.Item key="2">
                <Info />
                About
              </Menu.Item>
            </Link>
          </Menu>
        </Layout.Sider>
        <Layout>
          <Layout.Content>
            <Outlet />
          </Layout.Content>
          <Footer />
        </Layout>
      </Layout>
    </Layout>
  );
}

export default PageLayout;
