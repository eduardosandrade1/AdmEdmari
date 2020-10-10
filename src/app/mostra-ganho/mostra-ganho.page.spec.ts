import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostraGanhoPage } from './mostra-ganho.page';

describe('MostraGanhoPage', () => {
  let component: MostraGanhoPage;
  let fixture: ComponentFixture<MostraGanhoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostraGanhoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostraGanhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
