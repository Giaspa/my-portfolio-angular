import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { skillsResolver } from './skills.resolver';

describe('skillsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => skillsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
