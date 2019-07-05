import * as React from 'react';
import { TodosFilters } from '../../services/todoService';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as actions from '../../stores/actions';
import { Todo } from '../../stores/types';
import { FilterLink } from '../FilterItem/index';


// 将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = (state: any): { todos: Todo[] } => ({
  todos: state.todos
});

// 将 对应action 插入到组件的 props 中
const mapDispatcherToProps = (dispatch: Dispatch) => ({
    addTodo: (text: string) => dispatch(actions.addTodo(text))
});

export type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;

export class FilterLinkList extends React.Component<ReduxType> {

  public handleClick = (filter :string) => {
    // this.props.handleFilter(filter);
  }

  public render() {
    const items = TodosFilters.list.map(item => (
      <FilterLink
        key={item.label}
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

export const FilterLinks = connect(mapStateToProps, mapDispatcherToProps)(FilterLinkList);
