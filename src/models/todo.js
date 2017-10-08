import { observable, action } from 'mobx'

export class Todo {
  id;
  @observable title;
  @observable completed;

  constructor (title, completed = false) {
    this.title = title
    this.completed = completed
    this.id = Date.now()
  }

  @action('TODO -> SET_COMPLETED')
  setCompleted (state) {
    this.completed = state
  }
}
