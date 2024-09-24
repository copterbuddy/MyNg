import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitEventByNgComponent } from './emit-event-by-ng.component';

describe('EmitEventByNgComponent', () => {
  let component: EmitEventByNgComponent;
  let fixture: ComponentFixture<EmitEventByNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmitEventByNgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmitEventByNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
