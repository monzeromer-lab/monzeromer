import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonzerProjectsComponent } from './monzer-projects.component';

describe('MonzerProjectsComponent', () => {
  let component: MonzerProjectsComponent;
  let fixture: ComponentFixture<MonzerProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonzerProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonzerProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
