import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        end
        className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
      >
        Tickets
      </NavLink>
      <NavLink
        to="/create"
        className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
      >
        New Ticket
      </NavLink>
    </nav>
  );
};

export default Navbar;
