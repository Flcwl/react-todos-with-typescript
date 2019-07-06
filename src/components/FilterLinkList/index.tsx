import * as React from 'react';

import { FilterLink } from '../FilterItem/index';
import { TodosFilters, ITodosFilter } from '../../services/todoService';

export class FilterLinkList extends React.Component {

  public render() {

    return (
      <ul className="filters">
        {
          TodosFilters.map((item: ITodosFilter) => (
            <FilterLink
              key={item.filter}
              {...item}
            />
          ))
        }
      </ul>
    );
  }
}
