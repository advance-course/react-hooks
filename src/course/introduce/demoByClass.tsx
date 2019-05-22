import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    count: 0
  }

  render() {
    const { count } = this.state;
    return (
      <>
        <div>{count}</div>
        <button onClick={() => this.setState({ count: count + 1 })}>
          点击+1
        </button>
      </>
    );
  }
}
