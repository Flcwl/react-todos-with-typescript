import { ISetVisibilityFilterAction } from '../actions';
import { SET_CURRENT_FILTER } from '../constants';
import { VisibilityFilters } from '../types';


const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action: ISetVisibilityFilterAction): VisibilityFilters => {
    switch (action.type) {
        case SET_CURRENT_FILTER:
            return action.filter;
        default:
            return state;
    }
};

export default visibilityFilter;
