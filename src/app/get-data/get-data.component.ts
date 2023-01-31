import { Component, OnInit } from '@angular/core';
import{UserDataService} from "../services/user-data.service"

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {

  Users:any;

  constructor(private userData:UserDataService) 
  {
    userData.users().subscribe((data)=>{
      console.log("data", data);
      this.Users = data;
      
      
    });
   }

  ngOnInit(): void {
  }

}
