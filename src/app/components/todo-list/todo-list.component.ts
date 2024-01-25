import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { Todo } from '../../model/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  todos$?: Todo[];
  todoTitle?: string;

  onRemoveTodo(id: number) {
    throw new Error('Method not implemented.');
  }

  onToggleTodo(id: number) {
    throw new Error('Method not implemented.');
  }

  onAddTodo() {
    throw new Error('Method not implemented.');
  }
}
