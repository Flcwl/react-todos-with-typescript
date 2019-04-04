import * as React from 'react';
// import * as styles from "./App.scss";

export class FilterItem extends React.Component<{
  appTitle: string;
}> {

  public render() {

    return (
        <ul className="filters">
          <li>
            <a className="filter-label seleted all" href="javascript:void(0)">All</a>
          </li>
          <li>
            <a className="filter-label active" href="javascript:void(0)">Active</a>
          </li>
          <li>
            <a className="filter-label completed" href="javascript:void(0)">Completed</a>
          </li>
        </ul>
    );
  }
}
