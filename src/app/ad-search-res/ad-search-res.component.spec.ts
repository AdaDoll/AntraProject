import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdSearchResComponent } from './ad-search-res.component';

describe('AdSearchResComponent', () => {
  let component: AdSearchResComponent;
  let fixture: ComponentFixture<AdSearchResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdSearchResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdSearchResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
