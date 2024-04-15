import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeleteonLoaderComponent } from './skeleteon-loader.component';

describe('SkeleteonLoaderComponent', () => {
  let component: SkeleteonLoaderComponent;
  let fixture: ComponentFixture<SkeleteonLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkeleteonLoaderComponent]
    });
    fixture = TestBed.createComponent(SkeleteonLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
