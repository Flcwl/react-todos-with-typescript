import { ISetCurrentFilterAction } from '../actions';
import { SET_CURRENT_FILTER } from '../constants';
import { FiltersEnum } from '../types';


const currentFilter = (state: FiltersEnum = FiltersEnum.ALL, action: ISetCurrentFilterAction): FiltersEnum => {
  switch (action.type) {
    case SET_CURRENT_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default currentFilter;
