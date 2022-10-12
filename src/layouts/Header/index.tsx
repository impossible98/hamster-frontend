// import third-party modules
import { Layout, Button } from '@arco-design/web-react';
import { MenuFold } from '@icon-park/react';
import React from 'react';

function Header() {
  // return
  return (
    <Layout.Header
      style={{
        backgroundColor: 'var(--color-bg-2)',
        borderBottom: '1px solid var(--color-border)',
        height: '4rem',
      }}
    >
      <Button>
        <MenuFold />
      </Button>
    </Layout.Header>
  );
}

export default Header;
