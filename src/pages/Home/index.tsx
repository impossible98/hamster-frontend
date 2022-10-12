// import third-party modules
import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  Divider,
  Grid,
  Input,
  PageHeader,
  Tabs,
} from '@arco-design/web-react';
import type { RefInputType } from '@arco-design/web-react/es/Input/interface';
// import local modules
import { APP_NAME } from '@/config';
import { BASE_SEARCH_URL } from '@/utils/constants';
import { data } from '@/pages/Search';

function Home() {
  const inputElement = useRef<RefInputType>(null);
  const [activeTab, setActiveTab] = useState('1');
  // 页面标题
  useEffect(() => {
    document.title = `Home - ${APP_NAME}`;
  }, []);
  // return
  return (
    <PageHeader title="Home">
      <Grid.Row gutter={[24, 16]}>
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
            {data.map((item) => {
              return (
                <Tabs.TabPane key={item.key + 1} title={item.name}>
                  <Input
                    style={{
                      borderRadius: '9999px',
                      height: '40px',
                    }}
                    ref={inputElement}
                    onPressEnter={(e) => {
                      if (e.target.value) {
                        window.open(`${item.engine}${e.target.value}`);
                      }
                    }}
                  />
                </Tabs.TabPane>
              );
            })}
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
        <Grid.Col span={24}>
          <Divider />
        </Grid.Col>
      </Grid.Row>
    </PageHeader>
  );
}

export default Home;
