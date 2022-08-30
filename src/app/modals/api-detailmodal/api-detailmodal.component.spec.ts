import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDetailmodalComponent } from './api-detailmodal.component';

describe('ApiDetailmodalComponent', () => {
  let component: ApiDetailmodalComponent;
  let fixture: ComponentFixture<ApiDetailmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiDetailmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiDetailmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
