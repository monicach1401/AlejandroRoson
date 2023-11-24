import world from "../assets/images/world.png";
import folleto from "../assets/images/folleto.png";
import { Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

export const Home = () => {

// Función que envia el mail, %20 es el espacio
const sendEmail=() =>{
 window.location.href = `https://mail.google.com/mail/u/0/?fs=1&to=monicachavarria.c@gmail.com&su=Asunto%20del%20mail&tf=cm`
  
}




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
          <div className="mail">
          <Button
            variant="contained"
            style={{ backgroundColor: "black", color: "rgb(240, 170, 105)", }}
            startIcon={<EmailIcon />}
            onClick={sendEmail}
          >
            Enviar mail
          </Button>
        </div>
        </div>
        <div className="contact">
          <p>TELÉFONO</p>
        </div>
      
      </div>
    </>
  );
};
//href={`https://mail.google.com/mail/u/0/?fs=1&to=${userDB.mentor}&su=Submit%20Introduction%20Javascript%20Task1&tf=cm`}
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
