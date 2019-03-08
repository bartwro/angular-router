import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleEditInfoComponent } from './vehicle-edit-info.component';

describe('VehicleEditInfoComponent', () => {
  let component: VehicleEditInfoComponent;
  let fixture: ComponentFixture<VehicleEditInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleEditInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleEditInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
