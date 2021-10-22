import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  private readonly API = environment.API;
  
  constructor(private http: HttpClient) { }

  Create(tags: any) {      
    return this.http.post(`${ this.API }/tags`, tags);
  }

  List() {
    return this.http.get(`${ this.API }/tags`);
  }
}
