// import third-party modules
import React, { useEffect } from 'react';
import {
  Button,
  Card,
  PageHeader,
  Space,
  Table,
  Typography,
} from '@arco-design/web-react';
import { Edit } from '@icon-park/react';
// import local modules
import { APP_NAME } from '@/config';

export const data = [
  {
    key: '1',
    name: '头条搜索',
    engine: 'https://so.toutiao.com/search?dvpf=pc&keyword=',
    color: '#FF4D4F',
  },
  {
    key: '2',
    name: '有道',
    engine: 'https://youdao.com/result?lang=en&word=',
    color: '#1890FF',
  },
];

function Search() {
  const pageTitle = 'Search';

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Engine',
      dataIndex: 'engine',
    },
    {
      title: 'Color (hex)',
      dataIndex: 'color',
    },
  ];

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
          <>
            <Button icon={<Edit />} shape="circle" type="text" />
            <Typography.Text> Edit search</Typography.Text>
          </>
        }
      >
        <Table
          style={{
            maxWidth: 'fit-content',
            minWidth: 'auto',
          }}
          columns={columns}
          data={data}
        />
      </Card>
    </PageHeader>
  );
}

export default Search;
