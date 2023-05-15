import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { heroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe: any = {}

  constructor (private activatedRoute: ActivatedRoute, private heroesService: heroesService) {
    this.activatedRoute.params.subscribe( (params) => {
      this.heroe = heroesService.getHeroe(params['id'])
    }) 
  }
}
