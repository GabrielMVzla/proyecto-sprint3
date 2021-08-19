import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { LayoutComponent } from './layout/layout.component';
import { PaginacionComponent } from './paginacion/paginacion.component';
import { EjemplosComponent } from './directivas/ejemplos/ejemplos.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import {MatIconModule} from '@angular/material/icon';
=======
import { CoreModule } from './core/core.module';
import {MatIconModule} from '@angular/material/icon';

>>>>>>> 14097574a9f185bee9f2387ecb4baf4bb982520b

import { PaginatePipe } from './pipes/paginate.pipe';

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
<<<<<<< HEAD
=======
    CoreModule,
>>>>>>> 14097574a9f185bee9f2387ecb4baf4bb982520b
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
