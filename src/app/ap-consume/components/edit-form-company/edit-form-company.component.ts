import { Component, OnInit} from '@angular/core';
import { CompanyDataService } from 'src/app/core/service/company-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-form-company',
  templateUrl: './edit-form-company.component.html',
  styleUrls: ['./edit-form-company.component.css']
})
export class EditFormCompanyComponent implements OnInit {

  form: FormGroup;
  companyId: number;
  
  constructor(
    private companyDataService: CompanyDataService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.fillFormCompany()
      this.companyDataService.getOneCompany(this.companyId).subscribe( response =>{
        this.form.patchValue(response);
      })
  }

  saveNewCompany(e: Event){
    e.preventDefault();
    const company = this.form.value
    this.companyDataService.putCompany(this.companyId, company).subscribe(response =>{
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
