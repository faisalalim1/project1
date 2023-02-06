import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  url = "https://jsonplaceholder.typicode.com/albums";
  constructor(private http:HttpClient) { }

  users()
  {
    return this.http.get(this.url)
  }

  saveUsers(data:any)
  {
    return this.http.post(this.url,data);
  }


  //product from for get post edit delete

  postProduct(data:any){
    return this.http.post<any>("http://localhost:3000/ProductList",data);
  }

  getProduct(data:any){
    return this.http.get<any>("http://localhost:3000/ProductList");
  }
}
