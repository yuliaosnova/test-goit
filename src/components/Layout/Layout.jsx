import { Outlet, NavLink } from "react-router-dom";
import css from "./Layout.module.css";
import { Suspense } from "react";

export const Layout = () => {
  return (
    <>
      <header className={css.Header}>
        <nav>
          <NavLink to="/" className={css.NavItem}>
            Home
          </NavLink>

          <NavLink to="/tweets" className={css.NavItem}>
            Tweets
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div className={css.Spinner}>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer className={css.Footer}>
        <p className={css.FooterContent}>
          ©2023 | All rights reserved | Yulia Osnova
        </p>
      </footer>
    </>
  );
};
