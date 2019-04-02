import * as React from 'react';
// import * as styles from "./App.scss";

class Header extends React.Component<{
  appTitle: string;
}> {

  public render() {

    return (
      <header className="header">
        <h1 className="pink-color">{ this.props.appTitle }</h1>
        <form action="javascript:void(0);" id="new-todo-form">
          <input type="text" className="new-todo" placeholder="input your todo." autoFocus={true} />
        </form>
      </header>
    );
  }
}

export default Header;
