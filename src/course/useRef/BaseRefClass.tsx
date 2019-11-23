import React, { Component, createRef } from "react";

export default class Demo extends Component {
  textInput = createRef<HTMLInputElement>();

  focusTextInput = () => {
    if (this.textInput.current) {
      this.textInput.current.focus();
    }
  }

  render() {
    return (
      <>
        <input type="text" ref={this.textInput} />
        <button onClick={this.focusTextInput}>点击我让input组件获得焦点</button>
      </>
    );
  }
}
