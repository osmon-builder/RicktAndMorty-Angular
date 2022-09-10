import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  @Input() favCharacter : any 
  constructor() { }

  ngOnInit(): void {
  }

  deleteFavComic(removeItem = []) {
    const index = this.favCharacter.indexOf(removeItem);
    this.favCharacter.splice(index, 1);
    localStorage.setItem('data', JSON.stringify(this.favCharacter))

  }

}
