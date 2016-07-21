import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  moduleId: module.id,
  selector: 'app-todo-app',
  templateUrl: 'todo-app.component.html',
  styleUrls: ['todo-app.component.css'],
  providers: [TodoService]
})
export class TodoAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
