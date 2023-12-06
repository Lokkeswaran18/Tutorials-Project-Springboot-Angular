import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';

const baseUrl = 'http://localhost:4520/api/tutorials';

@Injectable({
  providedIn: 'root',
})
export class TutorialService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(baseUrl);
  }

  get(id: any): Observable<Tutorial> {
    return this.http.get<Tutorial>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`);
  }

  findByPublish(published:boolean):Observable<Tutorial[]>{
    return this.http.get<Tutorial[]>(`${baseUrl}/published`);
  }

  findByUnpublish(unpublished:boolean):Observable<Tutorial[]>{
    return this.http.get<Tutorial[]>(`${baseUrl}/unpublished`);
  }

  sortByAsc(title:any):Observable<Tutorial[]>{
    return this.http.get<Tutorial[]>(`${baseUrl}/sortByAsc/title`);
  }

 sortByDsc(title:any):Observable<Tutorial[]>{
  return this.http.get<Tutorial[]>(`${baseUrl}/sortByDsc/title`);
 }

 adminLogin(data:any):Observable<any>{
  return this.http.post(`${baseUrl}/adminLogin`,data);
 }

 userSignUp(data: any): Observable<any> {
  return this.http.post(`${baseUrl}/users/register`, data);
}

userSignIn(data:any):Observable<any>{
  return this.http.post(`${baseUrl}/login`,data);
}

}
