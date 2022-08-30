import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchApiService {
  private url = 'https://api.publicapis.org/entries';

  constructor(private httpClient: HttpClient) { }

  getPosts(){
     return this.httpClient.get(this.url)
  }
}
