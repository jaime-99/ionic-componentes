import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChecBoxPage } from './chec-box.page';

describe('ChecBoxPage', () => {
  let component: ChecBoxPage;
  let fixture: ComponentFixture<ChecBoxPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChecBoxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
