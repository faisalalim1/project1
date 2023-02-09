import { Component, OnInit,ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { UserDataService } from '../services/user-data.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-crud-operation',
  templateUrl: './crud-operation.component.html',
  styleUrls: ['./crud-operation.component.css']
})
export class CrudOperationComponent implements OnInit {

  displayedColumns: string[] = ['productName', 'category', 'type', 'price','date', 'comments','Action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog:MatDialog, private api: UserDataService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  //opening on dialog box 
  openDialog() {
  
    this.dialog.open(DialogComponent,{
     width:'30%'

    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getAllProducts();
      }
    })
  }

  //getting the product on API call 
  getAllProducts()
  {
    this.api.getProducts()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res); 
        this.dataSource.paginator = this.paginator;  
        this.dataSource.sort = this.sort;    
      },
      error:(err)=>{
        alert("Error while fetching the record!!")
      }
    })
  }

  //edit product from dialog box
  editproduct(row : any)
  {
    this.dialog.open(DialogComponent,{
      width:'50%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val === 'update'){
        this.getAllProducts();
      }
    })
  }

  //delete method
  deleteProduct(id:number)
  {
    this.api.deleteProduct(id)
    .subscribe({
      next:(res)=>{
        alert("product deleted successfully")
        this.getAllProducts();
      },
      error:()=>{
        alert("Error while deleting the product!!")
      }
    })
  }


  // filter method for dialog box

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  
}
