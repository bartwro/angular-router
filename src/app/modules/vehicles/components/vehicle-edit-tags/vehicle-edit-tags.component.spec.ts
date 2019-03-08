import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleEditTagsComponent } from './vehicle-edit-tags.component';

describe('VehicleEditTagsComponent', () => {
  let component: VehicleEditTagsComponent;
  let fixture: ComponentFixture<VehicleEditTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleEditTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleEditTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
