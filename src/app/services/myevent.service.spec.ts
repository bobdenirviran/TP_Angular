import { TestBed, inject } from '@angular/core/testing';

import { MyEventService } from './myevent.service';

describe('MyeventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyEventService]
    });
  });

  it('should be created', inject([MyEventService], (service: MyEventService) => {
    expect(service).toBeTruthy();
  }));
});
