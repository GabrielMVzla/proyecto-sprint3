import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormCompanyComponent } from './edit-form-company.component';

describe('EditFormCompanyComponent', () => {
  let component: EditFormCompanyComponent;
  let fixture: ComponentFixture<EditFormCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFormCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
