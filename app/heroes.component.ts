import { Component } from '@angular/core';
import { Hero } from './models/hero';
import { HeroService } from './services/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: "app/templates/heroes.component.html",
  styleUrls: ["app/styles/heroes.component.css"]
})

export class HeroesComponent { 

	title = "Tour of heroes";
	selectedHero = null;
	heroes = null;

	constructor(
		private heroService:HeroService,
		private router:Router
	) {

	}

	ngOnInit() {
		this.getHeroes();
	}

	getHeroes() {
		this.heroService.getHeroes().then((heroes) => this.heroes = heroes);
	}

	onSelect(hero) {
		this.selectedHero = hero;
	}

	gotoDetail() {
		this.router.navigate(['/detail', this.selectedHero.id]);
	}


	add(name: string): void {
	  name = name.trim();
	  if (!name) { return; }
	  this.heroService.create(name)
	    .then(hero => {
	      this.heroes.push(hero);
	      this.selectedHero = null;
	    });
	}

	delete(hero: Hero): void {
	  this.heroService
	      .delete(hero.id)
	      .then(() => {
	        this.heroes = this.heroes.filter(h => h !== hero);
	        if (this.selectedHero === hero) { this.selectedHero = null; }
	      });
	}
}