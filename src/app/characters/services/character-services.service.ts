import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterServicesService {

  constructor(
    private http: HttpClient
  ) { }

  getCharaters() : Observable<any>{
    return this.http.get(`${environment.BaseUrl}`)
}

}
