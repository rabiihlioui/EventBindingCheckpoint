import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindingCheckpointComponent } from './event-binding-checkpoint.component';

describe('EventBindingCheckpointComponent', () => {
  let component: EventBindingCheckpointComponent;
  let fixture: ComponentFixture<EventBindingCheckpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBindingCheckpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBindingCheckpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
