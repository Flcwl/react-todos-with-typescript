import * as React from 'react';
// import * as styles from "./App.scss";

export class Header extends React.Component<{
  appTitle: string;
}> {

  public render() {

    return (
      <header className="header">
        <h1 className="pink-color">{ this.props.appTitle }</h1>
      </header>
    );
  }
}

export default Header;
