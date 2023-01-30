import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  list: any[]=[]
  addTask(item:any)
  {
    console.log(item);
    this.list.push({id:this.list.length, name:item})
    
  }

  remove(id:number)
  {
    console.log(id);
    this.list = this.list.filter(item=>item.id!=id)
    
  }

}
