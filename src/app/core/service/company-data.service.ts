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
    return this.http.get<Company>(`${environment.url_api}/company/${id}`)

}
}