import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTitleComponent } from './set-title.component';

describe('SetTitleComponent', () => {
  let component: SetTitleComponent;
  let fixture: ComponentFixture<SetTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
