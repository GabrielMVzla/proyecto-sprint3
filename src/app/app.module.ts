import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginacionComponent } from './paginacion/paginacion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginatePipe } from './pipes/paginate.pipe';

import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { EjemplosComponent } from './directivas/ejemplos/ejemplos.component';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    DirectivasComponent,
    LayoutComponent,
    PaginacionComponent,
    PaginatePipe,
    EjemplosComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MatPaginatorModule,
    MatTableModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
