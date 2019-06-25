import * as React from 'react';
// import * as styles from "./App.scss";

export class FilterItem extends React.Component<{
  isActive: boolean;
  label: string;
  handleFilter: (label :string) => void;
}> {

  constructor(props :any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick() {
    this.props.handleFilter(this.props.label);
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

export default FilterItem;
