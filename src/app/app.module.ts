import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { TableComponent } from './components/table/table.component';
import { SertanejoComponent } from './components/sertanejo/sertanejo.component';
import { HttpClientModule } from '@angular/common/http';
import { FunkComponent } from './components/funk/funk.component';
import { PagodeComponent } from './components/pagode/pagode.component';
import { ForroComponent } from './components/forro/forro.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    TableComponent,
    SertanejoComponent,
    FunkComponent,
    PagodeComponent,
    ForroComponent,
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
