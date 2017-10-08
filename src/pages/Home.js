// @flow

import React from 'react'

/**
 * Components
 */
import { Form, List, Filters } from '@root/components'

export const PageHome = props => (
  <div className="app">
    <Filters />
    <Form />
    <List />
  </div>
)
