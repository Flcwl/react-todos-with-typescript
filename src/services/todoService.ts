import { FiltersEnum } from '../stores/types';

export interface ITodosFilter {
  label: string;
  filter: FiltersEnum;
}

export const TodosFilters: ITodosFilter[] = [
  {
    label: 'All',
    filter: FiltersEnum.ALL
  },
  {
    label: 'Active',
    filter: FiltersEnum.ACTIVE
  },
  {
    label: 'Completed',
    filter: FiltersEnum.COMPLETED
  }
];
