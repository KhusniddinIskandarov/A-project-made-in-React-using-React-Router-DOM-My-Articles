import { NavLink, Outlet } from "react-router-dom";
import BreadCrumps from "../components/BreadCrumps";

function RootLayout() {
  return (
    <>
      <header>
        <nav>
          <h1>My Articles</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/articles">Articles</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <BreadCrumps/>
      </header>
      <main>
        <Outlet/>
      </main>
    </>
  );
}

export default RootLayout;
