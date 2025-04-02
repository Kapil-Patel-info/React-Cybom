import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>

        <Link to="/home">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link>

      </nav>

      <hr size="4" color="red" />

      <Outlet />

      <hr size="4" color="red" />

      <footer>www.mycompany.com - All rights reserved</footer>
    </>
  );
};

export default Layout;
