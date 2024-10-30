import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  private baseUrl: string = "http://localhost:5291/Character/";

  constructor(private http: HttpClient) { }

  attack(id: string, stamina: number) {

    const body = { stamina };
    const headers = new HttpHeaders({'content-type': 'application/json'});
    this.http.put(this.baseUrl + "?id=" + id, body, {headers})
      .subscribe({error: err => {
          console.log(err);
        }});
  }
}
