// import third-party modules
import { Layout, Grid } from '@arco-design/web-react';
import React from 'react';
// import local modules
import { APP_NAME } from '@/utils/constants';

function Footer() {
  // return
  return (
    <Layout.Footer
      style={{
        alignItems: 'center',
        color: 'var(--color-text-2)',
        display: 'flex',
        height: '4rem',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Grid.Row>
        <Grid.Col>{APP_NAME}</Grid.Col>
      </Grid.Row>
    </Layout.Footer>
  );
}

export default Footer;
