// @flow

import React from 'react'
import { observer, inject } from 'mobx-react'
import { css } from 'glamor'

const inputStyle = css({
  padding: '0.5rem',
  width: '200px'
})

class BaseForm extends React.Component {
  props: {
    store: Object
  };

  state = {
    value: ''
  };

  render () {
    return (
      <form onSubmit={this._onSubmit}>
        <input
          type="text"
          placeholder="Rule the world..."
          onChange={this._onInputChange}
          onKeyPress={this._onInputKeyPress}
          value={this.state.value}
          {...inputStyle}
        />
      </form>
    )
  }

  _onInputChange = e => {
    const { value } = e.target

    this.setState(state => ({ ...state, value }))
  };

  _onInputKeyPress = e => {
    if (e.key === 'Enter') {
      this.setState(state => {
        this.props.store.addTodo(this.state.value)

        return {
          ...state,
          value: ''
        }
      })
    }
  };

  _onSubmit = e => {
    e.preventDefault()
  };
}

export const Form = inject('store')(observer(BaseForm))
