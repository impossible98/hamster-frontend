// import third-party modules
import {
  Button,
  Dropdown,
  Grid,
  Layout,
  Menu,
  Space,
  Typography,
} from '@arco-design/web-react';
import { IconDown } from '@arco-design/web-react/icon';
import { Logout, MenuFold, User } from '@icon-park/react';
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  // return
  return (
    <Layout.Header
      style={{
        backgroundColor: 'var(--color-bg-2)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <Grid.Row
        style={{
          height: '4rem',
        }}
      >
        <Grid.Col span={8}>
          <Button>
            <MenuFold />
          </Button>
        </Grid.Col>
        <Grid.Col span={8}></Grid.Col>
        <Grid.Col span={8}>
          <Space>
            <Dropdown
              droplist={
                <Menu>
                  <Menu.Item key="1">
                    <Space>
                      <User />
                      <Typography.Text>个人中心</Typography.Text>
                    </Space>
                  </Menu.Item>
                  <Link replace={true} to={'login'}>
                    <Menu.Item key="2">
                      <Space>
                        <Logout />
                        <Typography.Text>登出</Typography.Text>
                      </Space>
                    </Menu.Item>
                  </Link>
                </Menu>
              }
              position="bl"
            >
              <Button type="text">
                User
                <IconDown />
              </Button>
            </Dropdown>
          </Space>
        </Grid.Col>
      </Grid.Row>
    </Layout.Header>
  );
}

export default Header;
