import logo from "../assets/images/logo.png";

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
            <ul className="navbar-nav text-center d-flex ms-auto"> {/* poner ms-auto me alinea el menú a la derecha */}
              <li className="nav-item">
                <a
                  className="nav-link active text-center "
                  aria-current="page"
                  href="#"
                  style={{ color: "rgb(240, 170, 105)" }}
                >
                  INICIO
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-center "
                  href="#"
                  style={{ color: "rgb(240, 170, 105)" }}
                >
                  SERVICIOS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-center"
                  href="#"
                  style={{ color: "rgb(240, 170, 105)" }}
                >
                  SOBRE MÍ
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-center "
                  href="#"
                  style={{ color: "rgb(240, 170, 105)" }}
                >
                  CONTACTO
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
