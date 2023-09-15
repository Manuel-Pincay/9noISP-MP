import React from 'react';
import './home.css'; // Importa el archivo CSS para aplicar estilos
import 'bootstrap/dist/css/bootstrap.min.css';

function WelcomeMenu() {
  return (
    <div className="container-index">
      <header>
        <a href="http://localhost:3000" className="logo">APPWEB SEXTO A</a>
        <div className="d-flex">
          <a className="btn btn-dark" href="http://localhost:3000">ADMINISTRADOR</a>
        </div>
      </header>
      
      <div className="contenido"> 
        <div className="contenidobx">
          <h2>Mankar web <br /> Reservas </h2>
          <p><b>Web de reservas de servicios que ofrecen múltiples talleres,
              estaciones de servicios, lavadoras, entre otros.<br />
              Enfocada a que los usuarios realicen la reserva donde ellos elijan.                    
          </b></p>

          <a className="btn btn-primary" href="/inicio-sesion"><b>INICIAR SESIÓN</b></a>      
        </div>
      </div>
    </div>
  );
}

export default WelcomeMenu;
