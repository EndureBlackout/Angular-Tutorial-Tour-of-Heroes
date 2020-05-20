import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroSerivce: HeroService) { }

  getHeroes(): void {
    this.heroSerivce.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if(!name) { return; }
    this.heroSerivce.addHero({ name } as Hero).subscribe(hero => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroSerivce.deleteHero(hero).subscribe();
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
