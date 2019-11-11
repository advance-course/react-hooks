import React from 'react';

interface Props {
  render: (props: {x: number, y: number}) => any
}

export default class Mouse extends React.Component<Props> {
  state = { x: 0, y: 0 }

  handleMouseMove = (event: any) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    )
  }
}