import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeoresModules } from './heroes/heroes.module';
import { ServicioComponent } from './servicio/servicio/servicio.component';
import { ContadorComponent } from './contador/contador/contador.component';
import { ContadorModules } from './contador/contador.module';


@NgModule({
  declarations: [
    AppComponent,
    
    ServicioComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HeoresModules,
    ContadorModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
