import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// const baseUrl = 'https://curd-app-vishal.herokuapp.com';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get("https://vishal-curd.herokuapp.com/read");
  }
  // get(id): Observable<any> {
  //   return this.http.get("https://curd-app-vishal.herokuapp.com");
  // }
  create(data: any): Observable<any> {
    return this.http.post("https://vishal-curd.herokuapp.com/create", data);
  }
  update(data:any): Observable<any> {
    return this.http.post("https://vishal-curd.herokuapp.com/update", data);
  }
  // delete(id): Observable<any> {
  //   return this.http.delete("https://curd-app-vishal.herokuapp.com");
  // }
  delete(data:any): Observable<any> {
    return this.http.post("https://vishal-curd.herokuapp.com/delete",data);
  }
  findByTitle(title:any): Observable<any> {
    return this.http.get("https://curd-app-vishal.herokuapp.com");
  }
}