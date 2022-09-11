import { Component, OnInit } from '@angular/core';
import { CharacterServicesService } from '../services/character-services.service';


import { MatDialog } from '@angular/material/dialog';
import { ViewMoreComponent } from './components/view-more/view-more.component';
import { LocationComponent } from './components/location/location.component';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

 
  public character : any;
  public episode : any;
  public location: any
  public page: number = 1; 
  public favCharacter  : any = []
  public simpleViewMore : any;
  filter = ''



  constructor(
  public characServ: CharacterServicesService,
  public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.page
    this.favCharacter = JSON.parse(localStorage.getItem('data')!);
    if(!this.favCharacter){
      this.favCharacter= []
    }
   
    this.getCharacters()
    
  }

  getCharacters(){
    this.characServ.getCharaters().subscribe(
      res => {
        this.character = res.results
        this.character
        console.log(this.character)        
      }
    )
  }

  setFav( character: any){
      this.favCharacter.push(character)
      let characters : any[] = []
      if(localStorage.getItem('data') === null){
        characters.push(character);
        localStorage.setItem('data', JSON.stringify(characters))
      }else{
        characters = JSON.parse(localStorage.getItem('data')!)
        characters.push(character)
        localStorage.setItem('data', JSON.stringify(characters))
      }

  }
   
    openDialog(character: any) {
      this.dialog.open(ViewMoreComponent, {
       data: {character}
      })
     }
  
     openDialogLocation(character: any) {
      this.dialog.open(LocationComponent, {
       data: {character}
      })
     }  


}
