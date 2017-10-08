import { extendObservable, action } from 'mobx'

export class Todo {
  constructor (title, completed = false) {
    extendObservable(this, {
      title,
      completed
    })
    this.id = Date.now()
  }

  setCompleted = action('TODO -> SET_COMPLETED', function (state) {
    this.completed = state
  });
}
