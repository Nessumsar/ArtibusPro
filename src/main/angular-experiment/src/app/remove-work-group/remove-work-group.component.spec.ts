import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveWorkGroupComponent } from './remove-work-group.component';

describe('RemoveWorkGroupComponent', () => {
  let component: RemoveWorkGroupComponent;
  let fixture: ComponentFixture<RemoveWorkGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveWorkGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveWorkGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
