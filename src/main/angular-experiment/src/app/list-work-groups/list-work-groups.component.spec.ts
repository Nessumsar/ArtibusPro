import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWorkGroupsComponent } from './list-work-groups.component';

describe('ListWorkGroupsComponent', () => {
  let component: ListWorkGroupsComponent;
  let fixture: ComponentFixture<ListWorkGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWorkGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWorkGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
