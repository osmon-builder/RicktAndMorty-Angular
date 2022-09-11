import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CharacterServicesService } from 'src/app/characters/services/character-services.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent   {

  location: any
  character: any


  constructor(
    public locationServ: CharacterServicesService,
    @Inject(MAT_DIALOG_DATA)
    public data: any = []
  ) { 
      this.locationServ.getLocation(data.character.location.url.substr(-1)).subscribe(
        (res: any ) =>{
          this.location = res
          console.log(this.location)
          console.log(res)
          return this.location
        }
      )
 
   
    this.character = data.character;
  }



}
