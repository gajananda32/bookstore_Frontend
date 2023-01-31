import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenviewbookComponent } from './openviewbook.component';

describe('OpenviewbookComponent', () => {
  let component: OpenviewbookComponent;
  let fixture: ComponentFixture<OpenviewbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenviewbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenviewbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
