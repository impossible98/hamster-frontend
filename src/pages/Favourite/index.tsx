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

function Favourite() {
  const pageTitle = 'Favourite';

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'URL',
      dataIndex: 'url',
    },
    {
      title: 'Favicon',
      dataIndex: 'favicon',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'React 中文文档',
      url: 'https://zh-hans.reactjs.org/docs/getting-started.html',
      favicon: '#FF4D4F',
    },
    {
      key: '2',
      name: 'Arco Design 中文文档',
      url: 'https://arco.design/react/docs/start',
      favicon: '#1890FF',
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
          <Space>
            <Button icon={<Edit />} shape="circle" type="text" />
            <Typography.Text>Edit favourite</Typography.Text>
          </Space>
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

export default Favourite;
