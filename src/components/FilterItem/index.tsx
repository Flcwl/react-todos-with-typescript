import * as React from 'react';
// import * as styles from "./App.scss";

export class FilterItem extends React.Component<{
  isActive: boolean;
  label: string;
  // handleFilter: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  handleFilter: (label :string) => void;
}> {

  constructor(props :any) {
    // feelBad
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick(event :React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    console.log(event);
    // this.props.handleFilter(event.target);
    this.props.handleFilter(this.props.label);
  }

  public render() {
    const {isActive, label} = this.props;

    console.log(isActive);
    return (
      <li>
        <a onClick={this.handleClick} className={`filter-label${isActive ? ' selected' : ''}`} href="javascript:void(0)">{ label }</a>
      </li>
    );
  }
}
