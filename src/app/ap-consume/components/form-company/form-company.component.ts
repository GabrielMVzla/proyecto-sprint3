import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CompanyDataService} from '../../../core/service/company-data.service';

@Component({
  selector: 'app-form-company',
  templateUrl: './form-company.component.html',
  styleUrls: ['./form-company.component.css']
})
export class FormCompanyComponent implements OnInit {

  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private companyDataService: CompanyDataService
  ) { }

  ngOnInit(): void {
    this.fillFormCompany();
  }


  saveNewCompany(e: Event){
    e.preventDefault();
    this.companyDataService.postCompany(this.form.value).subscribe(response =>{
      console.log(response);
    })
    
  }


  fillFormCompany() {
    this.form = this.formBuilder.group({
      id: [100, [Validators.required]],
      name: ['', [Validators.required]],
      address: this.formBuilder.group({
        state: ['', [Validators.required]],
        city: ['', [Validators.required]],
        street: ['', [Validators.required]],
        zipcode: ['', [Validators.required]],
        number: [, [Validators.required]]
      }),
      phone: ['', [Validators.required]],
      CEO: this.formBuilder.group({
        name: ['', [Validators.required]],
        phone: ['', [Validators.required]]
      })
    })
  }


  /// Form grup datos generales
  get nameCompany() {
    return this.form.get('name')
  }
  get phoneCompany() {
    return this.form.get('phone')
  }

  /// Form grup direccion

  get adStateCompany() {
    return this.form.get('address').get('state');
  }
  get adCityCompany() {
    return this.form.get('address').get('city');
  }
  get adZipCompany() {
    return this.form.get('address').get('zipcode');
  }
  get adStreetCompany() {
    return this.form.get('address').get('street');
  }
  get adNumberCompany() {
    return this.form.get('address').get('number');
  }
  /// Form grup CEO

  get ceoNameCompany() {
    return this.form.get('CEO').get('name');
  }
  get ceoPhoneCompany() {
    return this.form.get('CEO').get('phone');
  }
  
}
