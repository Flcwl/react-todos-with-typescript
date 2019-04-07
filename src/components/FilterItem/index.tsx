import * as React from 'react';
// import * as styles from "./App.scss";

export class FilterItem extends React.Component<{
  isActive: boolean;
  label: string;
  // handleFilter: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  handleFilter: (label: string) => void;
}> {

  public isActiveFilter = false;

  constructor(props: any) {
    // feelBad
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    console.log(event);
    // this.props.handleFilter(event.target);
    this.props.handleFilter(this.props.label);
  }

  public render() {
    console.log(this.props.isActive);

    return (
      <li>
        <a onClick={this.handleClick} className={`filter-label${this.props.isActive ? ' selected' : ''}`} href="javascript:void(0)">{this.props.label}</a>
      </li>
    );
  }
}
