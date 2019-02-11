import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData():Observable<any[]>{
    return this.http.get<any[]>("https://hn.algolia.com/api/v1/search_by_date?tags=story");
  }
}
