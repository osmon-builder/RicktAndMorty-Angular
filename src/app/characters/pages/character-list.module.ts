import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from '../pipes/filter.pipe';
import { CharacterListComponent } from './character-list.component';
import { CharacterServicesService } from '../services/character-services.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FavouritesComponent } from './favourites/favourites.component';

import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { ViewMoreComponent } from './components/view-more/view-more.component';
import { LocationComponent } from './components/location/location.component';


const routes: Routes =[
  { path: "" , component: CharacterListComponent}
]

@NgModule({
  declarations: [
    CharacterListComponent,
    FilterPipe,
    ViewMoreComponent,
    FavouritesComponent,
    LocationComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatBottomSheetModule,
    RouterModule.forChild(routes)
  ],
  providers: [ CharacterServicesService ]
})
export class CharacterListModule { }
