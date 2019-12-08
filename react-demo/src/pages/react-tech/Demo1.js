import React, { Component, Fragment } from 'react'

export default class Demo1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleClick = e => {
    e.preventDefault()
    console.log(this)
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <Fragment>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>更新</button>
      </Fragment>
    )
  }
}