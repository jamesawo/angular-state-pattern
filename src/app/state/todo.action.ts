import { createAction, props } from '@ngrx/store';

import { Todo } from '../model/todo.model';

export const addTodoAction = createAction(
  '[Todo] Create Todo',
  props<{ todo: Todo }>()
);

export const toggleTodoAction = createAction(
  '[Todo] Toggle Todo',
  props<{ id: number }>()
);

export const removeTodoAction = createAction(
  '[Todo] Remove Todo',
  props<{ id: number }>()
);
