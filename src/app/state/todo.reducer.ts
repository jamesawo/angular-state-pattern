import { createReducer, on } from '@ngrx/store';

import { Todo } from '../model/todo.model';

import {
  addTodoAction,
  removeTodoAction,
  toggleTodoAction,
} from './todo.action';

export interface TodoState {
  todos: Todo[];
}

export const initialTodoState: TodoState = {
  todos: [
    {
      id: 1,
      completed: false,
      title: 'Test Todo',
    },
  ],
};

export const TodoReducer = createReducer(
  initialTodoState,

  on(addTodoAction, (state, { todo }) => ({
    ...state,
    todos: [...state.todos, todo],
  })),

  on(toggleTodoAction, (state, { id }) => ({
    ...state,
    todos: state.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ),
  })),

  on(removeTodoAction, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  }))
  //
);
