import * as React from 'react';
// import * as styles from "./App.scss";
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as actions from '../../stores/actions';

// 将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = (state: any, ownProps: any): { isActive: boolean, label: string } => ({
  isActive: state.currentFilter === ownProps.label,
  ...ownProps
});

// 将 对应action 插入到组件的 props 中
const mapDispatcherToProps = (dispatch: Dispatch, ownProps: any) => ({
    addTodo: (text: string) => dispatch(actions.addTodo(text)),
    handleFilter: () => dispatch(actions.setCurrentFilter(ownProps.label))

});

export type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;

export class FilterItem extends React.Component<ReduxType> {

  constructor(props :any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick() {
    this.props.handleFilter();
  }

  public render() {
    const {isActive, label} = this.props;

    return (
      <li>
        <a
          onClick={this.handleClick}
          className={`filter-label${isActive ? ' selected' : ''}`}
          href="javascript:void(0)">
          { label }
        </a>
      </li>
    );
  }
}

export const FilterLink = connect(mapStateToProps, mapDispatcherToProps)(FilterItem);
