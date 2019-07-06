// src/types/index.tsx
export const enum FiltersEnum {
  ALL= 'ALL',
  COMPLETED = 'COMPLETED',
  ACTIVE = 'ACTIVE'
}

export interface IStoreState {
  todos: ITodo[];
  currentFilter: FiltersEnum;
}

export class ITodo {
  public title: string;
  public isCompleted: boolean;
}
