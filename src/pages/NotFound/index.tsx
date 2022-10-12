// import third-party modules
import { Button, Grid, Layout, Result } from '@arco-design/web-react';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import local modules
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import { APP_NAME } from '@/config';

function NotFound() {
  // 页面标题
  useEffect(() => {
    document.title = `404 - ${APP_NAME}`;
  }, []);
  // return
  return (
    <Layout>
      <Header />
      <Layout.Content>
        <Grid.Row
          style={{
            height: 'calc(100vh - 8rem)',
            width: '100%',
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
            <Result
              status="error"
              title="There is a problem with your operation."
              extra={
                <Link replace={true} to={''}>
                  <Button
                    style={{
                      borderRadius: '9999px',
                    }}
                    status="danger"
                    type="primary"
                  >
                    Back
                  </Button>
                </Link>
              }
            />
          </Grid.Col>
        </Grid.Row>
      </Layout.Content>
      <Footer />
    </Layout>
  );
}

export default NotFound;
