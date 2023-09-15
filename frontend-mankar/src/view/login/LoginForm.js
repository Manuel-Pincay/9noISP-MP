import React, { useState } from 'react';
import './LoginForm.css'; // Asegúrate de importar tus estilos CSS personalizados aquí

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [exito, setExito] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar la lógica de autenticación, por ejemplo, enviar una solicitud al servidor.
    // Si hay un error de autenticación, puedes actualizar el estado "error". Si la autenticación es exitosa, puedes establecer "exito" en true.

    // Ejemplo de autenticación de demo:
    if (username === 'usuario' && password === 'contrasena') {
      setExito(true);
      setError('');
    } else {
      setError('Credenciales inválidas. Intenta nuevamente.');
      setExito(false);
    }
  };

  return (
    <div className="modal-dialog text-center">
      <div className="col-sm-4 main-section">
        <div className="modal-content">
          <div className="col-12 user-img">
            <img
              src="../../../images/ImagenSesion/user.png"
              alt="User"
            />
          </div>
          <form className="col-12" onSubmit={handleSubmit}>
            <div className="form-group" id="user-group">
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                className="form-control"
                placeholder="Cedula de usuario"
                name="username"
                required
              />
            </div>
            <div className="form-group" id="contrasena-group">
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="form-control"
                placeholder="Contraseña"
                name="password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-sign-in-alt"></i> Ingresar
            </button>
          </form>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          {exito && (
            <div className="alert alert-success" role="alert">
              Inicio de Sesión Exitoso.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
