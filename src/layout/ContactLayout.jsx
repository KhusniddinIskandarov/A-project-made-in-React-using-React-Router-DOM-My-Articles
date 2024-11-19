import { NavLink, Outlet } from "react-router-dom";

function ContactLayout() {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti,
        voluptatum porro. Labore beatae natus illo eius facilis cumque
        aspernatur nisi. Aliquid consequuntur sit est impedit, nobis vitae
        perferendis aut itaque, qui repellendus quibusdam cumque fuga aliquam.
        Error assumenda harum et? Blanditiis eaque aliquam facere enim, officia
        laudantium consequatur voluptate maiores?
      </p>
      <nav>
        <NavLink to="faq">Faq</NavLink>
        <NavLink to="form">Form</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default ContactLayout;
