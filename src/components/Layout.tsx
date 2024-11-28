import { PropsWithChildren } from 'react';

import { Link, Outlet } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <Link to="/">🍊귤스터디 리뷰🍊</Link>
    </nav>
  );
}

function Layout() {
  return (
    <div>
      <Header />
      {<Outlet />}
    </div>
  );
}

export default Layout;
