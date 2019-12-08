import React, { Component, Fragment } from 'react'

export default class Demo2 extends Component {

  handleClick = () => {
    if(this.myTextInput !== null) {
      this.myTextInput.focus()
    }
  }

  render() {
    return (
      <Fragment>
        <input type='text' ref={(ref) => this.myTextInput = ref} />
        <input type='button' value="focus the text input" onClick={this.handleClick} />
      </Fragment>
    )
  }
}