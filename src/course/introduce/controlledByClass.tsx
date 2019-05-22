import React, { Component } from 'react';

interface Props {
  value: number,
  onChange: (num: number) => any
}

interface State {
  count: number
}

export default class Counter extends Component<Props, State> {
  static getDerivedStateFromProps(nextProps: Props) {
    return {
      count: nextProps.value
    }
  }

  public state = {
    count: 0
  }

  public onClickHandler = (count: number) => {
    const { onChange } = this.props;
    this.setState({
      count
    })
    onChange && onChange(count);
  }

  render() {
    const { count } = this.state;
    return [
      <div key="a">{count}</div>,
      <button key="b" onClick={() => this.onClickHandler(count + 1)}>
        点击+1
      </button>
    ]
  }
}
