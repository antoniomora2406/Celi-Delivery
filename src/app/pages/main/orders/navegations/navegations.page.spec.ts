import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavegationsPage } from './navegations.page';

describe('NavegationsPage', () => {
  let component: NavegationsPage;
  let fixture: ComponentFixture<NavegationsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
