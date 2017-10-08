// @flow

import React from 'react'
import { observer, inject } from 'mobx-react'

const onCheckChange = todo => e => {
  todo.setCompleted(e.target.checked)
}

export const List = inject('store')(
  observer(props => (
    <div>
      {props.store.todos.map((todo, i) => (
        <div key={i}>
          <input type="checkbox" checked={todo.completed} onChange={onCheckChange(todo)} />
          <span>{todo.title}</span>
        </div>
      ))}
    </div>
  ))
)
