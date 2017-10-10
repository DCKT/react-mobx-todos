// @flow

import React from 'react'
import { observer, inject } from 'mobx-react'
import { css } from 'glamor'

/**
 * Styles
 */
const todoStyle = css({
  margin: '1rem 0'
})

type Props = {
  todo: Object,
  store: Object
}

class BaseTodo extends React.Component {
  props: Props;

  constructor (props) {
    super(props)

    this.state = {
      isEditMode: false,
      todoValue: props.todo.title
    }
  }

  render () {
    const { todo, store } = this.props
    const { isEditMode, todoValue } = this.state

    return (
      <div {...todoStyle}>
        <input type="checkbox" checked={todo.completed} onChange={this._onCheckChange} />
        {isEditMode ? (
          <input
            type="text"
            value={todoValue}
            onChange={this._onTodoEdit}
            onBlur={this._onBlur}
            onKeyPress={this._onKeyPress}
            autoFocus
          />
        ) : (
          <span onClick={this._toggleEditMode}>{todo.title}</span>
        )}

        {'  '}
        <button onClick={() => store.removeTodo(todo.id)}>x</button>
      </div>
    )
  }

  _onCheckChange = e => {
    this.props.todo.setCompleted(e.target.checked)
  };

  _onTodoEdit = e => {
    const { value } = e.target

    this.setState(state => ({ ...state, todoValue: value }))
  };

  _toggleEditMode = () => {
    this.setState(state => ({ ...state, isEditMode: !state.isEditMode }))
  };

  _onBlur = () => {
    this.props.todo.setTitle(this.state.todoValue).then(this._toggleEditMode)
  };

  _onKeyPress = e => {
    if (e.key === 'Enter') {
      this._onBlur()
    }
  };
}

export const Todo = inject('store')(observer(BaseTodo))
