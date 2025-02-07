import { Controller, Post, Get, Body, BadRequestException } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Post()
  addSuperhero(
    @Body('name') name: string,
    @Body('superpower') superpower: string,
    @Body('humilityScore') humilityScore: number,
  ) {
    if (!name || !superpower || humilityScore == null) {
      throw new BadRequestException('All fields are required.');
    }
    if (typeof humilityScore !== 'number' || humilityScore < 1 || humilityScore > 10) {
      throw new BadRequestException('Humility score must be a number between 1 and 10.');
    }
    return this.superheroesService.addSuperhero(name, superpower, humilityScore);
  }

  @Get()
  getSuperheroes() {
    return this.superheroesService.getSuperheroes();
  }
}