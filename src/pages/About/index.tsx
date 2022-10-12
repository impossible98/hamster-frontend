// import third-party modules
import React, { useEffect } from 'react';
import { PageHeader, Typography } from '@arco-design/web-react';
// import local modules
import { APP_NAME } from '@/config';

function About() {
  const pageTitle = 'About';
  // 页面标题
  useEffect(() => {
    document.title = `${pageTitle} - ${APP_NAME}`;
  }, []);
  // return
  return (
    <PageHeader
      title={<Typography.Title heading={2}>{pageTitle}</Typography.Title>}
    >
      <h1>About</h1>
    </PageHeader>
  );
}

export default About;
