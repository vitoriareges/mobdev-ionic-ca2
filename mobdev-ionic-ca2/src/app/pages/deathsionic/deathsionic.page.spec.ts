import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeathsionicPage } from './deathsionic.page';

describe('DeathsionicPage', () => {
  let component: DeathsionicPage;
  let fixture: ComponentFixture<DeathsionicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeathsionicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeathsionicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
