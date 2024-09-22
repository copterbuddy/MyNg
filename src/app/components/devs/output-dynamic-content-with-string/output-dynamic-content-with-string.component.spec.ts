import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputDynamicContentWithStringComponent } from './output-dynamic-content-with-string.component';

describe('OutputDynamicContentWithStringComponent', () => {
  let component: OutputDynamicContentWithStringComponent;
  let fixture: ComponentFixture<OutputDynamicContentWithStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputDynamicContentWithStringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputDynamicContentWithStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
