import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WordpressPage } from './wordpress.page';

describe('WordpressPage', () => {
  let component: WordpressPage;
  let fixture: ComponentFixture<WordpressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordpressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WordpressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
