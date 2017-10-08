import React from 'react'
import { observer, inject } from 'mobx-react'

const BaseFilters = props => (
  <div>
    <a href="#">All</a> <a href="#">Completed</a>
  </div>
)

export const Filters = inject('store')(observer(BaseFilters))
