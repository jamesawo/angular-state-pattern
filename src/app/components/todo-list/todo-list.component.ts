import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Todo } from '../../model/todo.model';
import {
  addTodoAction,
  toggleTodoAction,
  removeTodoAction,
} from '../../state/todo.action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  todos$?: Todo[];
  todoTitle: string = '';

  constructor(private store: Store<{ todos: { todos: Todo[] } }>) {
    store.select('todos').subscribe((todoState) => {
      this.todos$ = todoState.todos;
    });
  }

  onRemoveTodo(id: number) {
    this.store.dispatch(removeTodoAction({ id }));
  }

  onToggleTodo(id: number) {
    this.store.dispatch(toggleTodoAction({ id }));
  }

  onAddTodo() {
    if (this.todoTitle?.trim() === '') {
      return;
    }

    const todo: Todo = {
      id: Date.now(),
      completed: false,
      title: this.todoTitle,
    };

    this.store.dispatch(addTodoAction({ todo }));
    this.todoTitle = '';
  }
}
