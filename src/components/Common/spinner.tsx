// import third-party modules
import React from 'react';
import { Grid, Spin } from '@arco-design/web-react';

function Spinner() {
  // return
  return (
    <Grid.Row
      style={{
        height: '100vh',
        width: '100vw',
      }}
    >
      <Grid.Col
        span={24}
        style={{
          position: 'relative',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Spin dot />
      </Grid.Col>
    </Grid.Row>
  );
}

export default Spinner;
