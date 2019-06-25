import * as React from 'react';
import { TodosFilters } from '../../services/todoService';
import { FilterItem } from '../FilterItem';

export class FilterLinkList extends React.Component<{
  currentFilter: string;
  handleFilter: (label :string) => void;
}> {

  public handleClick = (filter :string) => {
    this.props.handleFilter(filter);
  }

  public render() {
    const items = TodosFilters.list.map(item => (
      <FilterItem
        key={item.label}
        isActive={this.props.currentFilter === item.label}
        label={item.label}
        handleFilter={this.handleClick}
      />
    ));

    console.log(items);

    return (
      <ul className="filters">
        { items }
      </ul>
    );
  }
}

export default FilterLinkList;
