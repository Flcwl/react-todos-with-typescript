import * as React from 'react';

export class AddTodosInput extends React.Component<{
  handleValue: (title :string) => void
}> {

  public state = {
    title: ''
  };
  public inputRef :any;

  constructor(props: any) {
    // feelBad
    super(props);
    this.inputRef = React.createRef();
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  public handleKeyDown(event :React.KeyboardEvent<HTMLInputElement>) {
    event.persist();
    console.log(typeof (event.target as any).value);
    const val = (event.target as any).value.trim();

    if (event.keyCode !== 13 || !val) {
      return;
    }
    // console.log(event);
    // event.target === this.input.current

    // ref
    this.inputRef.current.value = '';
    this.setState({
      title: val
    });

    this.props.handleValue(val);
  }

  public render() {

    return (
      <form action="javascript:void(0);" id="new-todo-form">
        <input
          ref={this.inputRef}
          type="text"
          className="new-todo"
          placeholder="input your todo."
          onKeyDown={this.handleKeyDown}
          autoFocus={true}
        />
      </form>
    );
  }
}

export default AddTodosInput;
