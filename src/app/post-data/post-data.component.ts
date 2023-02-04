import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css'],
})
export class PostDataComponent implements OnInit {
  userData: any;
  

  ngOnInit(): void {}
 


  getUserFormData(data: any) {
    console.log(data);
    this.userData.saveUsers(data).subscribe((result: any) => {
      console.log(result);
    });
  }
}
