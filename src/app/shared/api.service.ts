import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../test/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  points: number;

  constructor(private http : HttpClient) { }
  baseUrl = 'http://localhost:3000/signupUsers';
postEmployee(data : any){
  return this.http.post<any>("http://localhost:3000/posts", data)
  .pipe(map((res: any)=>{
    return res;
  }))
}

getEmployee(){
  return this.http.get<any>("http://localhost:3000/posts")
  .pipe(map((res: any)=>{
    return res;
  }))
}


updateEmployee(data : any, id:number){
  return this.http.put<any>(`http://localhost:3000/posts/${id}`, data)
  
}

deleteEmployee(id : number){
  return this.http.delete(`http://localhost:3000/posts/${id}`);
  
}
setPoint(data){
  this.points =data
}
getPoint(){
  return this.points
}
postUser(employee: User){
  return this.http.post<User>(this.baseUrl, employee);
}
}
