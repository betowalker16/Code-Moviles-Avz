import { Component } from '@angular/core'
import { heroesService } from 'src/app/services/heroes.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: any = [];

  constructor(private HeroesService: heroesService){

  }

  ngOnInit() {
    this.heroes = this.HeroesService.getHeroes()
    console.log(this.heroes);
  }

  muestraHeroe(id: number) {
    
  }
}
