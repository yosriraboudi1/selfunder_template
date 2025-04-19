import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReclamationComponent } from './edit-reclamation.component';

describe('EditReclamationComponent', () => {
  let component: EditReclamationComponent;
  let fixture: ComponentFixture<EditReclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditReclamationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
