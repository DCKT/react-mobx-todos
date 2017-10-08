// @flow

import { observable, useStrict, action } from 'mobx'

/**
 * Models
 */
import { Todo } from './models/'

useStrict(true)

export class Store {
  @observable todos = [];

  @action('TODOS -> ADD')
  addTodo (title: string) {
    this.todos.push(new Todo(title))
  }
}
