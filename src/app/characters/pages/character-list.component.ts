import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CharacterServicesService } from '../services/character-services.service';
import { ViewMoreComponent } from './view-more/view-more/view-more.component';

import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

 
  public character : any;
  public episode : any;
  public page: number = 1; 
  public favCharacter  : any = [] = [];
  public simpleViewMore : any;
  public viewMore: ComponentRef<ViewMoreComponent> = [] as any;
  filter = ''

  @ViewChild("viewMore", { static:true, read: ViewContainerRef })
  viewMoreContainer: ViewContainerRef = [] as any;

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

  getLastEpisode(list: any []){
    return list.filter(x=> x.slot === 1)[0]?.episode
  }


   
    openDialog(character: any) {
      this.dialog.open(ViewMoreComponent, {
       data: {character}
      })
     }
  


}
