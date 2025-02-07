import { Superhero } from './superhero.interface';
export declare class SuperheroesService {
    private superheroes;
    private idCounter;
    addSuperhero(name: string, superpower: string, humilityScore: number): Superhero;
    getSuperheroes(): Superhero[];
}
