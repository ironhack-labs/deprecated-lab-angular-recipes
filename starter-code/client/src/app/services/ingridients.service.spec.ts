import { TestBed, inject } from '@angular/core/testing';

import { IngridientsService } from './ingridients.service';

describe('IngridientsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IngridientsService]
    });
  });

  it('should be created', inject([IngridientsService], (service: IngridientsService) => {
    expect(service).toBeTruthy();
  }));
});
