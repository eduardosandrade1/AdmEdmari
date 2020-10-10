import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostraCarrosPage } from './mostra-carros.page';

describe('MostraCarrosPage', () => {
  let component: MostraCarrosPage;
  let fixture: ComponentFixture<MostraCarrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostraCarrosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostraCarrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
