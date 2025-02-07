import { SuperheroesService } from './superheroes.service';
export declare class SuperheroesController {
    private readonly superheroesService;
    constructor(superheroesService: SuperheroesService);
    addSuperhero(name: string, superpower: string, humilityScore: number): import("./superhero.interface").Superhero;
    getSuperheroes(): import("./superhero.interface").Superhero[];
}
