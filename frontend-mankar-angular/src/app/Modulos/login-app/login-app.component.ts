// login-app.component.ts
import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/interfaces/clases';
import { ServiciosService } from 'src/app/Services/servicios.service';

@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.css']
})

export class LoginAppComponent implements OnInit {
  public iniciong = false;
  public contrang = false;
  public exito = false;
  public InicioS: any = [];

  usuarioModel = new Usuarios(0, "", "", "", true, "", 0);

  constructor(private servicioInicioSesion: ServiciosService) { }

  ngOnInit(): void {
  }

  InicioSesion() {
    console.log(this.usuarioModel.USUARIO_DNI);

    this.servicioInicioSesion.CargarUsuario(this.usuarioModel.USUARIO_DNI).subscribe(Respuesta => {
      if (Respuesta.USUARIO_PASSWORD === this.usuarioModel.USUARIO_PASSWORD) {
        this.exito = true;
        window.location.href = `/inicio`;
      } else {
        this.contrang = true;
        setTimeout(() => { window.location.reload(); }, 1000);
      }
    },
    (err) => {
      this.iniciong = true;
      setTimeout(() => { window.location.reload(); }, 1000);
    });
  }
}
