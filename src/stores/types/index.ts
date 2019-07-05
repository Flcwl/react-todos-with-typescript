// src/types/index.tsx

export interface IStoreState {
  todos: Todo[];
  currentFilter: VisibilityFilters;
}

export const enum VisibilityFilters {
  SHOW_ALL= 'all',
  SHOW_COMPLETED = 'completed',
  SHOW_ACTIVE = 'active'
}

export class Todo {
  public isCompleted: boolean;
  public id: number;
  public title: string;
}
