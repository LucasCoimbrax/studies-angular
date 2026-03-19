import { TestBed } from '@angular/core/testing';

import { Calcular } from './calcular';

describe('Calcular', () => {
  let service: Calcular;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Calcular);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
