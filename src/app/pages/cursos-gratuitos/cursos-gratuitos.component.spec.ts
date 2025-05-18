import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosGratuitosComponent } from './cursos-gratuitos.component';

describe('CursosGratuitosComponent', () => {
  let component: CursosGratuitosComponent;
  let fixture: ComponentFixture<CursosGratuitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosGratuitosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosGratuitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
