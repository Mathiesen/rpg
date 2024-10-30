import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  baseUrl: string = "http://localhost:5291/Character";

  constructor(private http: HttpClient) { }

  getCharacter(id: string) : Observable<any> {
    return this.http.get(this.baseUrl + "?id=" + id);
  }
}
