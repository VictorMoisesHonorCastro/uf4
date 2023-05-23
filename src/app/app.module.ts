import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from './services/services.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReqresComponent } from './reqres/reqres.component';

@NgModule({
  declarations: [
    AppComponent,
    ReqresComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
