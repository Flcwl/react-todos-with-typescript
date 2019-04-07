import * as React from 'react';
// import * as styles from "./App.scss";
import { TodosFilters } from '../../services/todoService';
import { FilterItem } from '../FilterItem';

export class Footer extends React.Component<{
  handleFilter: (label: string) => void
}> {

  // TODO: 多级组件使用该状态，需统一公共管理
  public state = {
    currentFilter: TodosFilters.ALL
  };

  constructor(props: any) {
    // feelBad
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }



  public handleClick(event: string) {
    // not work
    // this.currentFilter = event;

    // state changed to reRender
    this.setState({
      currentFilter: event
    });
    this.props.handleFilter(event);
  }

  public render() {

    const items = TodosFilters.list.map(item => (
      <FilterItem key={item.label} isActive={this.state.currentFilter === item.label} label={item.label} handleFilter={this.handleClick} />
    ));
    console.log(items);

    return (
      // TODO: React discourage event delegation
      <ul className="filters">
        {items}
        {/* <li>
          <a onClick={this.handleClick} className={`filter-label all`} href="javascript:void(0)">All</a>
        </li>
        <li>
          <a onClick={this.handleClick} className="filter-label active" href="javascript:void(0)">Active</a>
        </li>
        <li>
          <a onClick={this.handleClick} className="filter-label completed" href="javascript:void(0)">Completed</a>
        </li> */}
      </ul>
    );
  }
}
