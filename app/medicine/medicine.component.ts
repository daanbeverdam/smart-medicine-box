import { Component, OnInit } from "@angular/core";

@Component({
  moduleId: module.id,
  templateUrl: "medicine.component.html",
  styleUrls: [ "medicine.component.css" ]
})

export class MedicineComponent implements OnInit {
  // heroes: Hero[] = [];
  //
  // constructor(private heroService: HeroService) { }
  //
  ngOnInit(): void {
  //   this.heroService.getHeroes()
  //     .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}