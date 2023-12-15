import { Outlet } from 'react-router-dom';
import { Header, Layout, Link, Navigation } from './App.styled';
import { GlobalStyle } from './GlobalStyle';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { Loader } from './Loader/Loader';

export const AppLayout = () => {
  return (
    <Layout>
      <Header>
        <Navigation>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </Navigation>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>

      <GlobalStyle />
      <Toaster />
    </Layout>
  );
};
