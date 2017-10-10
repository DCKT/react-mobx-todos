// @flow

import React from 'react'
import { observer, inject } from 'mobx-react'

/**
 * Compoentns
 */
import { Todo } from './Todo'

export const List = inject('store')(
  observer(props => (
    <div>{props.store.todosByFilter.map((todo, i) => <Todo key={i} todo={todo} />)}</div>
  ))
)
