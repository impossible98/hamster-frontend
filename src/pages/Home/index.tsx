// import third-party modules
import React, { useEffect } from 'react';
import { Grid, PageHeader, Typography } from '@arco-design/web-react';
// import local modules
import { APP_NAME } from '@/utils/constants';
import HomeFavourite from '@/components/Home/favourite';
import HomeSearch from '@/components/Home/search';

const Home: React.FC = () => {
  const pageTitle = 'Home ';
  // 页面标题
  useEffect(() => {
    document.title = `${pageTitle} - ${APP_NAME}`;
  }, []);
  // return
  return (
    <PageHeader
      title={<Typography.Title heading={2}>{pageTitle}</Typography.Title>}
    >
      <Grid.Row gutter={[24, 16]}>
        <Grid.Col span={24}>
          <HomeSearch />
        </Grid.Col>
        <Grid.Col span={24}>
          <HomeFavourite />
        </Grid.Col>
      </Grid.Row>
    </PageHeader>
  );
};

export default Home;
