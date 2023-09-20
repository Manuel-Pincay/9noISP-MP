import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from 'src/app/Services/servicios.service';
import Swal from 'sweetalert2';
import { Mantenimientos } from 'src/app/interfaces/clases';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {

  public Usuario: any = [];
  public Mantenimiento: any = [];
  public Mantenimientong: boolean = false;

  nuevoMantenimiento: Mantenimientos = {
    MANTENIMIENTO_KMAC: 0,
    MANTENIMIENTO_KMPROX: 0,
    MANTENIMIENTO_COMENTARIO: '',
    MANTENIMIENTO_FECHA: '',
    MANTENIMIENTO_IMAGEN: '',
    MANTENIMIENTO_IMAGEN2: '',
    ESTADO: false,
    UNIDADES_PLACA: '',
    TIPOSMANTE_ID: 0,
  };

  ServicioModel = new Mantenimientos(0, 0, "", "", "", "", true, "", 0);

  constructor(
    private serviceServices: ServiciosService,
    private RutaUser: ActivatedRoute
  ) {}

  formatearFecha(fecha: Date): string {
    const dia = ('0' + fecha.getDate()).slice(-2);
    const mes = ('0' + (fecha.getMonth() + 1)).slice(-2);
    const anio = fecha.getFullYear();
    return `${dia}-${mes}-${anio}`;
  }

  ngOnInit(): void {
    // Inicializa la fecha en el formato deseado al cargar la página
    this.nuevoMantenimiento.MANTENIMIENTO_FECHA = this.formatearFecha(new Date());
    this.obtenerDNIUsuario();

    // Resto de tu código
  }

  obtenerDNIUsuario() {
    let USUARIOS_DNI = +this.RutaUser.snapshot.paramMap.get('User')!;
    // Convierte el DNI a una cadena de texto
    const DNIUsuario = USUARIOS_DNI;

    this.serviceServices.CargarUsuario(DNIUsuario).subscribe(Respuesta => {
      console.log(Respuesta);
      this.Usuario = Respuesta;
      const nombreUsuario = this.Usuario.USUARIO_NOMBRE;
      console.log(`Nombre del usuario: ${nombreUsuario}`);
    });
  } 

  agregarMantenimiento() {
    // Llama al servicio de Firebase para agregar el nuevo mantenimiento
    this.serviceServices.agregarMantenimiento(this.nuevoMantenimiento).subscribe(
      (docRef) => {
        console.log('Mantenimiento agregado con ID: ', docRef._id);
        // Puedes hacer algo más aquí después de agregar el mantenimiento, como limpiar el formulario.
        this.nuevoMantenimiento = {
          MANTENIMIENTO_KMAC: 0,
          MANTENIMIENTO_KMPROX: 0,
          MANTENIMIENTO_COMENTARIO: '',
          MANTENIMIENTO_FECHA: '',
          MANTENIMIENTO_IMAGEN: '',
          MANTENIMIENTO_IMAGEN2: '',
          ESTADO: false,
          UNIDADES_PLACA: '',
          TIPOSMANTE_ID: 0,
        };
      },
      (error) => {
        console.error('Error al agregar mantenimiento: ', error);
      }
    );
  }


  getMantenimientos() {
    // Llama al servicio para obtener la lista de mantenimientos
    this.serviceServices.getMantenimientos().subscribe(
      Respuesta => {
        console.log(Respuesta);
       this.Mantenimiento = Respuesta;
      /*   console.log(this.Mantenimiento);  */
        // Asigna los mantenimientos a la propiedad mantenimientos
      },
      (error) => {
        console.error('Error al obtener la lista de mantenimientos: ', error);
      }
    );
  }

  // Resto de tus funciones
}
