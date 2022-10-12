// import third-party modules
import { Button, Checkbox, Form, Grid, Input } from '@arco-design/web-react';
import type { FormInstance } from '@arco-design/web-react/es/Form';
import React, { useRef, useState } from 'react';
// import local modules
import { showRegister } from '@/config';

function LoginForm() {
  const formElement = useRef<FormInstance>(null);
  const [loading, _setLoading] = useState<boolean>(false);
  const [rememberPassword, setRememberPassword] = useState(!!'');
  // return
  return (
    <Grid.Row
      style={{
        height: 'calc(100vh - 8rem)',
        maxWidth: '32rem',
      }}
    >
      <Grid.Col
        style={{
          position: 'relative',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        span={24}
      >
        <Form
          layout="vertical"
          ref={formElement}
          initialValues={{ userName: 'admin', password: 'admin' }}
        >
          <Form.Item field="userName" rules={[{ required: true }]}>
            <Input
              style={{
                height: '3rem',
              }}
              placeholder="a"
            />
          </Form.Item>
          <Form.Item field="password" rules={[{ required: true }]}>
            <Input.Password
              style={{
                height: '3rem',
              }}
              placeholder="aa"
            />
          </Form.Item>
          <Form.Item>
            <Checkbox checked={rememberPassword} onChange={setRememberPassword}>
              Remember password
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button
              style={{
                borderRadius: '9999px',
                width: '100%',
              }}
              type="primary"
              loading={loading}
            >
              Login
            </Button>
          </Form.Item>
          {showRegister ? (
            <Form.Item>
              <Button
                style={{
                  borderRadius: '9999px',
                  color: 'var(--color-text-2)',
                  width: '100%',
                }}
                type="text"
              >
                Register
              </Button>
            </Form.Item>
          ) : null}
        </Form>
      </Grid.Col>
    </Grid.Row>
  );
}

export default LoginForm;
