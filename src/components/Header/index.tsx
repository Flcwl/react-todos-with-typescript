import * as React from 'react';

export class Header extends React.Component<{
  title: string;
}> {

  public render() {

    return (
      <header className="header">
        <h1 className="pink-color">{ this.props.title }</h1>
      </header>
    );
  }
}

export default Header;
