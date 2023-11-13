import world from "../assets/images/world.png";
import folleto from "../assets/images/folleto.png";

export const Home = () => {
  return (
    <>
      <div className="image-container">
        <div className="world-container">
          <img src={world} className="fixed-photo" alt="World" />
        </div>
        <h1 className="name">CREACIÓN Y GESTIÓN DE REDES SOCIALES</h1>
      </div>
      <img
        src={folleto}
        alt="Folleto"
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          height: "45%",
          width: "40%",
        }}
      />{" "}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "6%",
          height: "44%",
          width: "40%",
          textAlign: "center",
        }}
      >
        <p className="uptoprogress">
          UP<span className="color">TO</span>PROGRESS
        </p>{" "}
        {/*la palabra TO aparece en otro color */}
        <p>
          <strong>
            En UPTOPROGRESS, no solo creamos Redes Sociales, construimos
            comunidades.<br></br>
            No solo gestionamos perfiles, cultivamos lealtad. <br></br>
            Porque creemos que el éxito en las redes sociales no se trata solo
            de números, sino de personas, historias y experiencias compartidas.
          </strong>
        </p>
        <div className="contact">
          <p>CORREO ELECTRÓNICO</p>
        </div>
        <div className="contact">
          <p>TELÉFONO</p>
        </div>
      </div>
    </>
  );
};

/*<div className="App">
<header className="App-header">
  <img
    src={world}
    className="App-world"
    alt="world"
    style={{ width: "50%", height: "30%" }}
  />
</header>
</div>*/
