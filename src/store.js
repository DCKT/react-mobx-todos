// @flow

import { observable, useStrict, action } from 'mobx'
import { TODOS } from '@root/constants'

/**
 * Models
 */
import { Todo } from '@root/models'

useStrict(true)

export class Store {
  @observable todos = [];
  @observable filter = TODOS.ALL_FILTER;

  get todosByFilter () {
    switch (this.filter) {
      case TODOS.ALL_FILTER:
        return this.todos
      case TODOS.COMPLETED_FILTER:
        return this.todos.filter(todo => todo.completed)
      default:
        return this.todos
    }
  }

  @action('TODOS -> ADD')
  addTodo (title: string) {
    this.todos.push(new Todo(title))
  }

  @action('TODOS -> SET_FILTER')
  setFilter (filter: string) {
    this.filter = filter
  }

  @action('TODOS -> REMOVE_TODO')
  removeTodo (id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }
}
