import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: object[];

  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        'id': 1,
        'title': 'Complete Angular Project Today',
        'completed': false,
        'editing': false,

      },
      {
        'id': 2,
        'title': 'Hurry up and cook food',
        'completed': false,
        'editing': false,

      },
      {
        'id': 3,
        'title': 'Wash dishes',
        'completed': false,
        'editing': false,

      }

    ]

  }

}
