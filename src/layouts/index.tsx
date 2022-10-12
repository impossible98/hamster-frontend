// import third-party modules
import { Button, Layout, Menu, Typography } from '@arco-design/web-react';
import { Home, Info, Search, Star, User } from '@icon-park/react';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// import local modules
import Header from './Header';
import Footer from './Footer';

const PageLayout: React.FC = () => {
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
                <Button icon={<Home />} type="text" />
                <Typography.Text> Home</Typography.Text>
              </Menu.Item>
            </Link>
            <Link to={'/search'}>
              <Menu.Item key="2">
                <Button icon={<Search />} type="text" />
                <Typography.Text> Search</Typography.Text>
              </Menu.Item>
            </Link>
            <Link to={'/favourite'}>
              <Menu.Item key="3">
                <Button icon={<Star />} type="text" />
                <Typography.Text> Favourite</Typography.Text>
              </Menu.Item>
            </Link>
            <Link to={'/account'}>
              <Menu.Item key="4">
                <Button icon={<User />} type="text" />
                <Typography.Text> Account</Typography.Text>
              </Menu.Item>
            </Link>
            <Link to={'/about'}>
              <Menu.Item key="5">
                <Button icon={<Info />} type="text" />
                <Typography.Text> About</Typography.Text>
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
};

export default PageLayout;
