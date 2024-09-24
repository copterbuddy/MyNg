import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetterFunctionComponent } from './getter-function.component';

describe('GetterFuncctionComponent', () => {
  let component: GetterFunctionComponent;
  let fixture: ComponentFixture<GetterFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetterFunctionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetterFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
