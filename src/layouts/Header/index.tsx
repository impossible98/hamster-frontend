// import third-party modules
import {
  Button,
  Dropdown,
  Grid,
  Image,
  Layout,
  Menu,
  Space,
  Typography,
} from '@arco-design/web-react';
import { IconDown } from '@arco-design/web-react/icon';
import { Logout, MenuFold, User } from '@icon-park/react';
import React from 'react';
import { Link } from 'react-router-dom';
// import local modules
import logo from '@/assets/logo.svg';

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
        <Grid.Col
          style={{
            height: '4rem',
          }}
          span={8}
        >
          <Button
            style={{
              backgroundColor: 'var(--color-bg-1)',
              marginTop: 'calc(4rem - 3rem)',
            }}
          >
            <MenuFold size={24} />
          </Button>
          <Image
            style={{
              marginTop: '-0.725rem',
            }}
            alt="logo"
            preview={false}
            src={logo}
            width={32}
          />
        </Grid.Col>
        <Grid.Col span={8}></Grid.Col>
        <Grid.Col
          style={{
            height: '4rem',
          }}
          span={8}
        >
          <Space>
            <Dropdown
              droplist={
                <Menu>
                  <Link replace={true} to={'login'}>
                    <Menu.Item key="1">
                      <Space>
                        <User />
                        <Typography.Text>个人中心</Typography.Text>
                      </Space>
                    </Menu.Item>
                  </Link>
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
              trigger={['click', 'hover']}
            >
              <Button
                style={{
                  backgroundColor: 'var(--color-bg-1)',
                  marginTop: 'calc(4rem - 3rem)',
                }}
                type="text"
              >
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
