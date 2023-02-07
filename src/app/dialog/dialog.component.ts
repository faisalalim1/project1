import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { UserDataService } from '../services/user-data.service';
import{MatDialogRef} from '@angular/material/dialog'



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  list = ['New', 'Old', 'Refurbished'];
  productForm !:FormGroup;
  constructor(private formBuilder : FormBuilder, private api :UserDataService ,private dialogRef: MatDialogRef<DialogComponent> ) { }
 

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: ['',Validators.required],
      category: ['',Validators.required],
      type: ['',Validators.required],
      price: ['',Validators.required],
      comments: ['',Validators.required],
      date: ['',Validators.required],
    })
  }

  addProduct()
  {
    if(this.productForm.valid){
      this.api.postProduct(this.productForm.value)
      .subscribe({
        next:(res)=>{
          alert("Product added successfully")
          this.productForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
        
          alert("Error while adding the products")
      }
    })
    
  }
    
  }

  
   
  
    

}
