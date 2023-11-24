import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
export const Navigation = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{
          backgroundColor: "black",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
        }}
      >
        <div className="container-fluid">
          <img
            className="d-inline-block align-center"
            src={logo}
            alt=""
            width="60"
            height="60"
          />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav text-center d-flex ms-auto">
              {" "}
              {/* poner ms-auto me alinea el menú a la derecha */}
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  activeClassName="active"
                  style={{ color: "rgb(240, 170, 105)" }}
                >
                  INICIO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/services"
                  className="nav-link"
                  activeClassName="active"
                  style={{ color: "rgb(240, 170, 105)" }}
                >
                  SERVICIOS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/aboutme"
                  className="nav-link"
                  activeClassName="active"
                  style={{ color: "rgb(240, 170, 105)" }}
                >
                  SOBRE MÍ
                </NavLink>
              </li>
              <li className="nav-item">
                              <NavLink
                  to="/contact"
                  className="nav-link"
                  activeClassName="active"
                  style={{ color: "rgb(240, 170, 105)" }}
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
