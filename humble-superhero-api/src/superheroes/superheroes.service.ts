import { Injectable } from '@nestjs/common';
import { Superhero } from './superhero.interface';

@Injectable()
export class SuperheroesService {
  private superheroes: Superhero[] = [];
  private idCounter = 1;

  addSuperhero(name: string, superpower: string, humilityScore: number): Superhero {
    const newHero: Superhero = {
      id: this.idCounter++,
      name,
      superpower,
      humilityScore,
    };
    this.superheroes.push(newHero);
    return newHero;
  }

  getSuperheroes(): Superhero[] {
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}