import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoDeLoginComponent } from './acesso-de-login.component';

describe('AcessoDeLoginComponent', () => {
  let component: AcessoDeLoginComponent;
  let fixture: ComponentFixture<AcessoDeLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcessoDeLoginComponent]
    });
    fixture = TestBed.createComponent(AcessoDeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
