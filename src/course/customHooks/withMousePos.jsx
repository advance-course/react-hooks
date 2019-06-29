import React, { Component } from 'react';

export default function withMousePos(MouseComponent) {
  return class extends Component {
    state = {
      x: 0,
      y: 0
    }

    mouseMoveHandler = (event) => {
      this.setState({
        x: event.clientX,
        y: event.clientX
      })
    }

    render() {
      return (
        <div onMouseMove={this.mouseMoveHandler}>
          <MouseComponent mouse={this.state} />
        </div>
      )
    }
  }
}
