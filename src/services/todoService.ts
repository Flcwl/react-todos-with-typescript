export interface ITodo {
  id: number;
  title: string;
  isCompleted: boolean;
}

export const TodosFilters = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed',
  list: [
    {
      label: 'all'
    },
    {
      label: 'active'
    },
    {
      label: 'completed'
    }
  ]
};
