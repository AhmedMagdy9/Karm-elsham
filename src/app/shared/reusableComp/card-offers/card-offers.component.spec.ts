import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOffersComponent } from './card-offers.component';

describe('CardOffersComponent', () => {
  let component: CardOffersComponent;
  let fixture: ComponentFixture<CardOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardOffersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
