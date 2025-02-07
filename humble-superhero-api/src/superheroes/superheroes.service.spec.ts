import { SuperheroesService } from './superheroes.service';

describe('SuperheroesService', () => {
  let service: SuperheroesService;

  beforeEach(() => {
    service = new SuperheroesService();
  });

  it('should add and retrieve superheroes in order of humility', () => {
    service.addSuperhero('Iron Man', 'Technology', 7);
    service.addSuperhero('Captain America', 'Leadership', 10);
    
    const superheroes = service.getSuperheroes();
    expect(superheroes[0].name).toBe('Captain America');
    expect(superheroes[1].name).toBe('Iron Man');
  });
});