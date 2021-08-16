import { Component, OnInit } from '@angular/core';
import { CompanyDataService } from '../core/service/company-data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Company } from '../core/models/company.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginacion',
  templateUrl: './paginacion.component.html',
  styleUrls: ['./paginacion.component.css']
})
export class PaginacionComponent implements OnInit {

  constructor(
    private api: CompanyDataService
  ) {}

  ngOnInit(){
    this.api.getAllCompany().subscribe(response => {
      this.datos = response
    }, (error : HttpErrorResponse) => {
      console.log("Error en la base de datos");
      console.log(error);
    });
  }

  datos: Company[] = []
  
  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }


  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions: number[] = [10, 20, 50, 100]

}
