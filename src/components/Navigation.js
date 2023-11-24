import logo from "../assets/images/logo.png";
import { NavLink, useLocation } from "react-router-dom";
export const Navigation = () => {
  /* con location puedo saber donde estoy en todo momento */
  const location = useLocation();

  /* en la variable pathname, sé en todo momento cual es mi ruta */
  const isActiveRoute = (route) => {
    return location.pathname === route;
  };
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <img
            className="d-inline-block align-center"
            src={logo}
            alt=""
            width="60"
            height="60"
          />

          <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            className="navbar-toggler"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item" style={{ margin: "10px" }}>
                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    color: isActiveRoute("/") ? "white" : "rgb(240, 170, 105)",
                  })}
                >
                  INICIO
                </NavLink>
              </li>
              <li className="nav-item" style={{ margin: "10px" }}>
                <NavLink
                  to="/services"
                  style={({ isActive }) => ({
                    color: isActiveRoute("/services")
                      ? "white"
                      : "rgb(240, 170, 105)",
                  })}
                >
                  SERVICIOS
                </NavLink>
              </li>
              <li className="nav-item" style={{ margin: "10px" }}>
                <NavLink
                  to="/aboutme"
                  style={({ isActive }) => ({
                    color: isActiveRoute("/aboutme")
                      ? "white"
                      : "rgb(240, 170, 105)",
                  })}
                >
                  SOBRE MÍ
                </NavLink>
              </li>
              <li className="nav-item" style={{ margin: "10px" }}>
                <NavLink
                  to="/contact"
                  style={({ isActive }) => ({
                    color: isActiveRoute("/contact")
                      ? "white"
                      : "rgb(240, 170, 105)",
                  })}
                >
                  CONTACTO
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
