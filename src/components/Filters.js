// @flow

import React from 'react'
import { observer, inject } from 'mobx-react'
import { css } from 'glamor'
import { TODOS } from '@root/constants'

const filterStyle = isActive =>
  css({
    color: isActive ? '#242424' : '#2196F3',
    textDecoration: isActive ? 'none' : 'underline',
    cursor: isActive ? 'default' : 'pointer'
  })

const BaseFilters = ({ store }: Object) => (
  <div>
    {console.log(TODOS.COMPLETED_FILTER)}
    <a
      href="#"
      onClick={() => store.setFilter(TODOS.ALL_FILTER)}
      {...filterStyle(store.filter === TODOS.ALL_FILTER)}
    >
      All
    </a>
    {'  '}
    <a
      href="#"
      onClick={() => store.setFilter(TODOS.COMPLETED_FILTER)}
      {...filterStyle(store.filter === TODOS.COMPLETED_FILTER)}
    >
      Completed
    </a>
  </div>
)

export const Filters = inject('store')(observer(BaseFilters))
