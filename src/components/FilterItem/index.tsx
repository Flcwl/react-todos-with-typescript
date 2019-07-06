import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as actions from '../../stores/actions';
import { ITodosFilter } from '../../services/todoService';
import { IStoreState } from '../../stores/types/index';

// 将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = (state: IStoreState, ownProps: ITodosFilter): { isActive: boolean, label: string } => ({
  isActive: state.currentFilter === ownProps.filter,
  label: ownProps.label
});

// 将 对应action 插入到组件的 props 中
const mapDispatcherToProps = (dispatch: Dispatch, ownProps: ITodosFilter) => ({
    handleFilter: () => dispatch(actions.setCurrentFilter(ownProps.filter))
});

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;

export class FilterItem extends React.Component<ReduxType> {

  public render() {
    const {isActive, label, handleFilter} = this.props;

    return (
      <li>
        <a
          onClick={handleFilter}
          className={`filter-label${isActive ? ' selected' : ''}`}
          href="javascript:void(0)">
          { label }
        </a>
      </li>
    );
  }
}

// https://medium.com/@pongsatt/how-to-use-redux-in-typescript-ad0b5fe77933
// 使用 connect 高阶组件对 Counter 进行包裹
export const FilterLink = connect(mapStateToProps, mapDispatcherToProps)(FilterItem);
