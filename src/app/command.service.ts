import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  private baseUrl: string = "http://localhost:5291/";

  constructor(private http: HttpClient) { }

  attack(id: string, stamina: number) : Observable<any> {
    const body = { stamina: stamina };
    return this.http.put(this.baseUrl + "?id=" + id, body);
  }
}
