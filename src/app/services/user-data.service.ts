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


  //product from for get post edit delete,ang get

  //API for post the data
  postProduct(data:any){
    return this.http.post<any>("http://localhost:3000/ProductList",data);
  }

  //API for getting the data
  getProducts(){
    return this.http.get<any>("http://localhost:3000/ProductList");
  }

  //API for put product data
  putProduct(data:any, id:number){
    return this.http.put<any>(`http://localhost:3000/ProductList/${id}`,data);
  }

  //API for deleteting data from product list

  deleteProduct(id:number)
  {
    return this.http.delete<any>(`http://localhost:3000/ProductList/${id}`);
  }
}
