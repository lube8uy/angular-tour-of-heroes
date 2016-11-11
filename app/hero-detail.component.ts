import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common'; 
import { Hero } from './models/hero';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/templates/hero-detail.component.html',
  styleUrls: ['app/styles/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{
  @Input()
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {

  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id']; //we convert the route parameter value to a number with the JavaScript (+) operator.
      this.heroService.getHero(id)
        .then(hero => this.hero = hero);
    });
  }

  goBack() {
    this.location.back();
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }
}