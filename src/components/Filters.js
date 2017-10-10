// @flow

import React from 'react'
import { observer, inject } from 'mobx-react'
import { css } from 'glamor'
import { TODOS } from '@root/constants'

const containerStyle = css({
  marginBottom: '0.5rem'
})

const filterStyle = isActive =>
  css({
    marginRight: '0.5rem',
    fontSize: '1.1rem',
    color: isActive ? '#242424' : '#2196F3',
    textDecoration: isActive ? 'none' : 'underline',
    cursor: isActive ? 'default' : 'pointer',
    fontWeight: isActive ? 'bold' : 'normal'
  })

const BaseFilters = ({ store }: Object) => (
  <div {...containerStyle}>
    <a
      href="#"
      onClick={() => store.setFilter(TODOS.ALL_FILTER)}
      {...filterStyle(store.filter === TODOS.ALL_FILTER)}
    >
      All
    </a>
    <a
      href="#"
      onClick={() => store.setFilter(TODOS.COMPLETED_FILTER)}
      {...filterStyle(store.filter === TODOS.COMPLETED_FILTER)}
    >
      Completed
    </a>

    <a
      href="#"
      onClick={() => store.setFilter(TODOS.REMAINING_FILTER)}
      {...filterStyle(store.filter === TODOS.REMAINING_FILTER)}
    >
      Remaining
    </a>
  </div>
)

export const Filters = inject('store')(observer(BaseFilters))
