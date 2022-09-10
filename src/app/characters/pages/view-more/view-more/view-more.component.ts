import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.scss']
})
export class ViewMoreComponent   {

  
  character: any

  constructor(
  @Inject(MAT_DIALOG_DATA) 
  public data: any
  
  ) {
    this.character = data.character;
    console.log(this.character)
  }

}
