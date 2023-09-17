import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from 'src/app/Services/servicios.service';
import Swal from 'sweetalert2';
/* import {Reservas} from '../../interfaces/clases'; */
import { Mantenimientos } from 'src/app/interfaces/clases';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
     
})
export class PrincipalComponent implements OnInit {
public servicios: any=[]
public Establecimiento:any=[]
public Usuario:any=[]
public Mantenimiento:any=[]
public Datos: any=[]
public Establecimientong:boolean=true
public clientesng:boolean=true
public serviciong:boolean=true
public carrosng:boolean=true
public trabajadoresng:boolean=true
public Mantenimientong:boolean=false

ServicioModel = new Mantenimientos(0,0,"",new Date(),"","",true,"",0)

  constructor(
    private serviceServices: ServiciosService,
    private RutaUser:ActivatedRoute
    ) { }

  ngOnInit(): void {
/*     let USUARIO_DNI= +this.RutaUser.snapshot.paramMap.get('User')!
    this.serviceServices.CargarUsuario(USUARIO_DNI).subscribe(Respuesta=>{
      console.log(Respuesta)
      this.Usuario=Respuesta  
    }) 

 */
  }
/* 
  deleteMantenimiento(id:string){
    this.serviceServices.deleteMantenimiento(id).subscribe(
      Resp=>{
        Swal.fire({
          title: 'Eliminado!!',
          text: 'La reserva a sido eliminada con exito',
        })
        this.getMantenimientos()
      }
    )
  }

  ConsultarMantenimientos(){
    console.log(this.Usuario.USUARIO_DNI)
    this.serviceServices.ConsultarMantenimientos(this.Usuario.USUARIO_DNI).subscribe(
      res => {
        this.serviciong=false
        this.Mantenimientong=true
        this.Mantenimiento=res
        console.log(res)
        console.log(this.Mantenimiento)
        if(this.Mantenimiento.length==0){
          Swal.fire({
            title: 'Lo sentimos!',
            text: 'Por el momento no tienes ninguna Mantenimiento.',
          })
        }
        
    },
    
    err =>{
      Swal.fire({
        title: 'Lo sentimos!',
        text: 'Por el momento no tienes ninguna Mantenimiento.',
      })
    }
    )

  }
  GuardarReserva(name:HTMLInputElement, ced:HTMLInputElement, idser:HTMLInputElement, ename:HTMLInputElement, pre:HTMLInputElement, date:HTMLInputElement, time:HTMLInputElement, car:HTMLInputElement){
    this.serviceServices.CargarReservas().subscribe(Resp=>{
      this.Mantenimiento=Resp
      let IdReserva=this.Mantenimiento.length
      this.Mantenimiento.forEach((reserva:any)=>{
        IdReserva=reserva.RESERVACION_ID
      })
      IdReserva=IdReserva +1;
          this.ServicioModel.RESERVACION_ID= IdReserva
          this.ServicioModel.CLIENTE_CEDULA = ced.placeholder
          this.ServicioModel.SERVICIO_ID = Number(idser.placeholder)
          this.ServicioModel.ESTABLECIMIENTO_ID = Number(ename.placeholder)
          this.ServicioModel.RESERVACION_PRECIO = Number(pre.placeholder)
          console.log(this.ServicioModel)

          this.serviceServices.GuardarReservas(this.ServicioModel).subscribe(
            res => {
                alert("La reserva ah sido guardada de forma exitosa!!");
              window.location.reload();
            },
            
            err =>{
              alert("Ha ocurrido un error intente nuevamente");
              window.location.reload();
            })
  })
  }


  mensaje () {

    Swal.fire({
      title: 'Proximamente!',
      text: 'Estamos trabajando en implementar nuevos servicios.',
      imageUrl: '../../../assets/images/prox.png',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }
 
 


   MostrarServicios(NombreServicio:string){
    this.serviciong=true
    this.Mantenimientong=false
    this.serviceServices.CargarServicios(NombreServicio).subscribe(Respuesta=>{

    this.servicios=Respuesta
    let num=0
      this.servicios.forEach((service: any) =>{
        this.serviceServices.CargarEstablecimiento(service.ESTABLECIMIENTO_NOMBRE).subscribe(Resp=>{
          this.Establecimiento=Resp
          this.servicios[num].ESTABLECIMIENTO_DESCRIPCION=`${this.Establecimiento.ESTABLECIMIENTO_DESCRIPCION}`
          //console.log(this.servicios[num].ESTABLECIMIENTO_DESCRIPCION);
          this.servicios[num].ESTABLECIMIENTO_ID=`${this.Establecimiento.ESTABLECIMIENTO_ID}`
          //console.log(this.servicios[num].ESTABLECIMIENTO_ID);

          num++;
        })
        
      })
    })
  } */

  
  }