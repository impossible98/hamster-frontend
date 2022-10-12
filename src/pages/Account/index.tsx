// import third-party modules
import React, { useEffect, useRef } from 'react';
import {
  Button,
  Card,
  Form,
  Input,
  PageHeader,
  Space,
  Typography,
} from '@arco-design/web-react';
import type { RefInputType } from '@arco-design/web-react/es/Input/interface';
import { Check, Close, Lock, User } from '@icon-park/react';
// import local modules
import { APP_NAME } from '@/config';

function Account() {
  const pageTitle = 'Account';
  const inputElementNewPassword = useRef<RefInputType>(null);
  const inputElementConfirmPassword = useRef<RefInputType>(null);
  // 页面标题
  useEffect(() => {
    document.title = `${pageTitle} - ${APP_NAME}`;
  }, []);
  // return
  return (
    <PageHeader
      title={<Typography.Title heading={2}>{pageTitle}</Typography.Title>}
    >
      <Card
        style={{
          width: '100%',
        }}
        title={
          <Space>
            <Button icon={<Lock />} shape="circle" type="text" />
            <Typography.Text>Change user password</Typography.Text>
          </Space>
        }
      >
        <Form
          style={{
            maxWidth: '24rem',
            minWidth: 'auto',
          }}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item label="Current password" rules={[{ required: true }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item label="New password" rules={[{ required: true }]}>
            <Input.Password ref={inputElementNewPassword} />
          </Form.Item>
          <Form.Item label="Confirm password" rules={[{ required: true }]}>
            <Input.Password
              ref={inputElementConfirmPassword}
              addAfter={
                inputElementNewPassword.current?.dom.value ==
                inputElementConfirmPassword.current?.dom.value ? (
                  <Check size="14" fill="#00ff00" />
                ) : (
                  <Close size="14" fill="#333" />
                )
              }
            />
          </Form.Item>
          <Form.Item>
            <Button
              style={{
                borderRadius: '9999px',
              }}
              type="primary"
            >
              Update password
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </PageHeader>
  );
}

export default Account;
