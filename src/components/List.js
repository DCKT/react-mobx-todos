// @flow

import React from 'react'
import { observer, inject } from 'mobx-react'
import { css } from 'glamor'

const todoStyle = css({
  margin: '1rem 0'
})

const onCheckChange = todo => e => {
  todo.setCompleted(e.target.checked)
}

export const List = inject('store')(
  observer(props => (
    <div>
      {props.store.todosByFilter.map((todo, i) => (
        <div key={i} {...todoStyle}>
          <input type="checkbox" checked={todo.completed} onChange={onCheckChange(todo)} />
          <span>{todo.title}</span>
          {'  '}
          <button onClick={() => props.store.removeTodo(todo.id)}>x</button>
        </div>
      ))}
    </div>
  ))
)
