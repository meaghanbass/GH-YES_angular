import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSocialBarComponent } from './top-social-bar.component';

describe('TopSocialBarComponent', () => {
  let component: TopSocialBarComponent;
  let fixture: ComponentFixture<TopSocialBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSocialBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSocialBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
