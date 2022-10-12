// import third-party modules
import { Layout } from '@arco-design/web-react';
import React, { useEffect } from 'react';
// import local modules
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import { APP_NAME } from '@/config';
import LoginForm from './form';

function Login() {
  // 页面标题
  useEffect(() => {
    document.title = `Login - ${APP_NAME}`;
  }, []);
  // return
  return (
    <Layout>
      <Header />
      <Layout.Content>
        <LoginForm />
      </Layout.Content>
      <Footer />
    </Layout>
  );
}

export default Login;
