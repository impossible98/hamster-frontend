// import third-party modules
import React, { useRef, useState } from 'react';
import { Button, Grid, Input, PageHeader, Tabs } from '@arco-design/web-react';
import type { RefInputType } from '@arco-design/web-react/es/Input/interface';
// import local modules
import { BASE_SEARCH_URL } from '@/utils/constants';

function Home() {
  const inputElement = useRef<RefInputType>(null);
  const [activeTab, setActiveTab] = useState('1');
  // return
  return (
    <PageHeader title="Home">
      <Grid.Row>
        <Grid.Col span={24}>
          <Tabs activeTab={activeTab} type="rounded" onChange={setActiveTab}>
            <Tabs.TabPane key="1" title="cn Bing">
              <Input
                style={{
                  borderRadius: '9999px',
                  height: '40px',
                }}
                ref={inputElement}
                onPressEnter={(e) => {
                  if (e.target.value) {
                    window.open(`${BASE_SEARCH_URL}${e.target.value}`);
                  }
                }}
              />
            </Tabs.TabPane>
          </Tabs>
        </Grid.Col>
        <Grid.Col span={24}>
          <Button
            style={{
              borderRadius: '9999px',
              left: '50%',
              marginTop: '0.5rem',
              transform: 'translateX(-50%)',
            }}
            onClick={() => {
              if (inputElement.current && inputElement.current.dom.value) {
                window.open(
                  `${BASE_SEARCH_URL}${inputElement.current.dom.value}`
                );
              }
            }}
          >
            Search
          </Button>
        </Grid.Col>
      </Grid.Row>
    </PageHeader>
  );
}

export default Home;
