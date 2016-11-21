import { Component, OnInit } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "my-box",
  templateUrl: "box.component.html",
  styleUrls: [ "box.component.css" ]
})

export class BoxComponent implements OnInit {
  // heroes: Hero[] = [];
  //
  // constructor(private heroService: HeroService) { }
  //
  ngOnInit(): void {
  //   this.heroService.getHeroes()
  //     .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}