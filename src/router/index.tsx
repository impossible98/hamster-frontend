// import third-party modules
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import local modules
import Spinner from '@/components/Common/spinner';
const About = React.lazy(() => import('@/pages/About'));
const Account = React.lazy(() => import('@/pages/Account'));
const Home = React.lazy(() => import('@/pages/Home'));
const Login = React.lazy(() => import('@/pages/Login'));
const NotFound = React.lazy(() => import('@/pages/NotFound'));
const PageLayout = React.lazy(() => import('@/layouts'));

function Router() {
  // return
  return (
    <BrowserRouter>
      <React.Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PageLayout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="account" element={<Account />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default Router;
