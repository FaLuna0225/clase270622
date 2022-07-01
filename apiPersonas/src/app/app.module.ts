import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentePasaporteComponent } from './componente-pasaporte/componente-pasaporte.component';
import { ComponenteUsarnameComponent } from './componente-usarname/componente-usarname.component';
import { ComponenteEmailComponent } from './componente-email/componente-email.component';
import { ComponentePasswordComponent } from './componente-password/componente-password.component';
import { ComponentePrincipalComponent } from './componente-principal/componente-principal.component';
import { ComponenteNombreComponent } from './componente-nombre/componente-nombre.component'

@NgModule({
  declarations: [
    AppComponent,
    ComponentePasaporteComponent,
    ComponenteUsarnameComponent,
    ComponenteEmailComponent,
    ComponentePasswordComponent,
    ComponentePrincipalComponent,
    ComponenteNombreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
