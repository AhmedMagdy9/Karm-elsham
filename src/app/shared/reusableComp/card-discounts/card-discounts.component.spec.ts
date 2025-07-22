import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDiscountsComponent } from './card-discounts.component';

describe('CardDiscountsComponent', () => {
  let component: CardDiscountsComponent;
  let fixture: ComponentFixture<CardDiscountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDiscountsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
