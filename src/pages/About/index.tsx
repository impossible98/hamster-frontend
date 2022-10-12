// import third-party modules
import React, { useEffect } from 'react';
import { PageHeader } from '@arco-design/web-react';
// import local modules
import { APP_NAME } from '@/config';

function About() {
  // 页面标题
  useEffect(() => {
    document.title = `About - ${APP_NAME}`;
  }, []);
  // return
  return (
    <PageHeader title="About">
      <h1>About</h1>
    </PageHeader>
  );
}

export default About;
