import { Component } from '@angular/core';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/templates/dashboard.component.html',
  styleUrls: ['app/styles/dashboard.component.css']  
})

export class DashboardComponent {

	heroes = null;
	
	constructor(private heroService: HeroService) {

	}

	ngOnInit(): void {
	    this.heroService.getHeroes()
	      .then(heroes => this.heroes = heroes.slice(1, 5));
	}
}