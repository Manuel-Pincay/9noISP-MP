import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './Modulos/welcome/welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginAppComponent } from './Modulos/login-app/login-app.component';

const routes:Routes=[
  {path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {path: 'inicio', component: WelcomeComponent, pathMatch: 'full'  },
/*   {path: 'inicio-sesion', component: InicioSesionComponent, pathMatch: 'full'  },
  {path: 'principal/:User', component: PrincipalComponent, pathMatch: 'full'}
 */
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginAppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



