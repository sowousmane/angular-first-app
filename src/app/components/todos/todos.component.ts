import { Todo } from './../../modules/Todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] | undefined;
  inputTodo: string = '';

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content: 'first todo',
        completed: false,
      },
      {
        content: 'second todo',
        completed: false,
      },
    ];
  }
  toggleDone(id: number) {
    this.todos?.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos?.filter((v, i) => i != id);
  }
  addTodo() {
    this.todos?.push({
      content: this.inputTodo,
      completed: false,
    });
    this.inputTodo = '';
  }
}
