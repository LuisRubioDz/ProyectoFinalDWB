import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssEnHtmlComponent } from './css-en-html.component';

describe('CssEnHtmlComponent', () => {
  let component: CssEnHtmlComponent;
  let fixture: ComponentFixture<CssEnHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssEnHtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssEnHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
