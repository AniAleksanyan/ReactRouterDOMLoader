import { NavLink, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <nav style={{ marginBottom: "1rem" }}>
        <NavLink
          to="/"
          end
          style={({ isActive }) => ({
            marginRight: "10px",
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "blue" : "black",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/users"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "blue" : "black",
          })}
        >
          Users
        </NavLink>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}