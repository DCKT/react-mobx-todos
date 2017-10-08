// @flow

import { extendObservable, useStrict, action } from 'mobx'

/**
 * Models
 */
import { Todo } from './models/'

useStrict(true)

export class Store {
  constructor () {
    extendObservable(this, {
      todos: []
    })
  }

  addTodo = action('TODOS -> ADD', function (title: string) {
    this.todos.push(new Todo(title))
  });
}
