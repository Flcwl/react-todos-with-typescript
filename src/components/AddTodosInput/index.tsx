// // export { default } from './view';
// // export * from './view';
// import * as React from 'react';
// // import * as styles from "./App.scss";

// export class TodosForm extends React.Component<{
//   handleValue: (title :string) => void
// }> {

//   public state = {
//     title: ''
//   };
//   public inputRef :any;

//   constructor(props: any) {
//     // feelBad
//     super(props);
//     this.inputRef = React.createRef();
//     this.handleKeyDown = this.handleKeyDown.bind(this);
//   }

//   public handleKeyDown(event :React.KeyboardEvent<HTMLInputElement>) {
//     event.persist();
//     if (event.keyCode !== 13) {
//       return;
//     }
//     // console.log(event);
//     // event.target === this.input.current
//     const val = (event.target as any).value;
//     // ref
//     this.inputRef.current.value = '';
//     this.setState({
//       title: val
//     });

//     this.props.handleValue(val);
//   }

//   public render() {

//     return (
//       <form action="javascript:void(0);" id="new-todo-form">
//         <input
//           ref={this.inputRef}
//           type="text"
//           className="new-todo"
//           placeholder="input your todo."
//           onKeyDown={ this.handleKeyDown }
//           autoFocus={true}
//         />
//       </form>
//     );
//   }
// }

// export default TodosForm;
