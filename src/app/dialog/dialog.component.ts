import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { UserDataService } from '../services/user-data.service';
import{MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'




@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  list = ['New', 'Old', 'Refurbished'];
  productForm !:FormGroup;
  actionBtn :string= "save";

  constructor(private formBuilder : FormBuilder,
     private api :UserDataService ,
     @Inject(MAT_DIALOG_DATA) public editData :any,
     private dialogRef: MatDialogRef<DialogComponent>
     ) { }
 

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: ['',Validators.required],
      category: ['',Validators.required],
      type: ['',Validators.required],
      price: ['',Validators.required],
      comments: ['',Validators.required],
      date: ['',Validators.required],
    });
    console.log(this.editData);
    if(this.editData){
      this.actionBtn = "update";
      this.productForm.controls['productName'].setValue(this.editData.productName);
      this.productForm.controls['category'].setValue(this.editData.category);
      this.productForm.controls['type'].setValue(this.editData.type);
      this.productForm.controls['price'].setValue(this.editData.price);
      this.productForm.controls['comments'].setValue(this.editData.comments);
      this.productForm.controls['date'].setValue(this.editData.date);
    }
    
  }

  //adding products on the list
  addProduct()
  {
    if(!this.editData){
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
    }else{
      this.updateProduct()
    }
    
  }

  //edit the product list and reset the list

  updateProduct()
  {
    this.api.putProduct(this.productForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Product updated successfully");
        this.productForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>{
        alert("Error while updating the record!!!");
      }
    })
  }

}
