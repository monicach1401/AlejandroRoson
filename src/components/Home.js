import world from "../assets/images/world.png";
import folleto from "../assets/images/folleto.png";
import { Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";


export const Home = () => {
  /* --- Función para enviar mail 
  const sendEmail = () => {
   window.location.href = `https://mail.google.com/mail/u/0/?fs=1&to=monicachavarria.c@gmail.com&su=Asunto:%20Consulta%20para%20Alejandro%20Rosón%20Chavarría&tf=cm`;
   }*/

  return (
    <>
      <div className="container">
        <div className="image-container">
          <div className="world-container">
            <img src={world} className="fixed-photo" alt="World" />
            <h1 className="name">CREACIÓN Y GESTIÓN DE REDES SOCIALES</h1>
          </div>
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
          <p className="textOfUpToProgress">
            UP<span className="color">TO</span>PROGRESS
          </p>{" "}
          {/*la palabra TO aparece en otro color */}
          <p>
            <strong>
              En UPTOPROGRESS, no solo creamos Redes Sociales, construimos
              comunidades.<br></br>
              No solo gestionamos perfiles, cultivamos lealtad. <br></br>
              Porque creemos que el éxito en las redes sociales no se trata solo
              de números, sino de personas, historias y experiencias
              compartidas.
            </strong>
          </p>
          <Button
            variant="contained"
            style={{ backgroundColor: "black", color: "rgb(240, 170, 105)" }}
            startIcon={<EmailIcon />}
            href={`https://mail.google.com/mail/u/0/?fs=1&to=monicachavarria.c@gmail.com&su=Asunto:%20Consulta%20para%20Alejandro%20Rosón%20Chavarría&tf=cm`}
          >
            Enviar mail
          </Button>
          <div className="contact">
            <p>+34 678 231 978</p>
          </div>
        </div>
      </div>
    </>
  );
};
