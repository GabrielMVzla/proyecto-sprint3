import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Company} from '../models/company.model';
import {environment} from '../../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class CompanyDataService {

  constructor(
    private http: HttpClient
  ) { }


  getAllCompany(){
    return this.http.get<Company[]>(`${environment.url_api}/company`);
  }

  getOneCompany(id:number){
    return this.http.get<Company>(`${environment.url_api}/company/${id}`);
  }

  postCompany(company:Company){
    return this.http.post(`${environment.url_api}/company`, company);
  }

  deleteCompany(id:number){
    return this.http.delete(`${environment.url_api}/company/${id}`);
  }

  putCompany(id: number, change: Partial <Company>){
    return this.http.put(`${environment.url_api}/company/${id}`, change)
  }

}