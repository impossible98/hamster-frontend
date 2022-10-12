// import third-party modules
import React, { useRef, useState } from 'react';
import {
  Button,
  Card,
  Grid,
  Input,
  Space,
  Tabs,
  Typography,
} from '@arco-design/web-react';
import type { RefInputType } from '@arco-design/web-react/es/Input/interface';
import { Search } from '@icon-park/react';
// import local modules
import { showSearch } from '@/config';
import { BASE_SEARCH_URL } from '@/utils/constants';
import { data } from '@/pages/Search';

const HomeSearch: React.FC = () => {
  const inputElement = useRef<RefInputType>(null);
  const [activeTab, setActiveTab] = useState('1');
  // return
  return (
    <Card
      style={{
        backgroundColor: 'var(--color-bg-1)',
        width: '100%',
      }}
      title={
        <Space>
          <Button icon={<Search />} shape="circle" type="text" />
          <Typography.Text>Search</Typography.Text>
        </Space>
      }
    >
      <Tabs activeTab={activeTab} type="rounded" onChange={setActiveTab}>
        <Tabs.TabPane
          key="1"
          title={
            <Typography.Text
              style={{
                color: '#3277F4',
              }}
            >
              Search
            </Typography.Text>
          }
        >
          <Grid.Row gutter={[24, 16]}>
            <Grid.Col span={24}>
              <Input
                style={{
                  borderRadius: '9999px',
                  height: '2.5rem',
                }}
                ref={inputElement}
                onPressEnter={(e) => {
                  if (e.target.value) {
                    window.open(`${BASE_SEARCH_URL}${e.target.value}`);
                  }
                }}
              />
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
        </Tabs.TabPane>
        {showSearch
          ? data.map((item) => {
              return (
                <Tabs.TabPane
                  key={item.key + 1}
                  title={
                    <Typography.Text
                      style={{
                        color: item.color,
                      }}
                    >
                      {item.name}
                    </Typography.Text>
                  }
                >
                  <Grid.Row gutter={[24, 16]}>
                    <Grid.Col span={24}>
                      <Input
                        style={{
                          borderRadius: '9999px',
                          height: '2.5rem',
                        }}
                        ref={inputElement}
                        onPressEnter={(event) => {
                          if (event.target.value) {
                            window.open(`${item.engine}${event.target.value}`);
                          }
                        }}
                      />
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
                          if (
                            inputElement.current &&
                            inputElement.current.dom.value
                          ) {
                            window.open(
                              `${item.engine}${inputElement.current.dom.value}`
                            );
                          }
                        }}
                      >
                        Search
                      </Button>
                    </Grid.Col>
                  </Grid.Row>
                </Tabs.TabPane>
              );
            })
          : null}
      </Tabs>
    </Card>
  );
};

export default HomeSearch;
