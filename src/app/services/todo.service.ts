import { Injectable } from '@angular/core';


import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';

import { TODO } from '../models/todo';



@Injectable()
export class TodoService {

  todos: FirebaseListObservable<any>;
  todo: FirebaseObjectObservable<any>;

  constructor(public af: AngularFireDatabase) {
      this.todos = this.af.list('/todos') as FirebaseListObservable<TODO[]>;
  }

  getToDo() {
    return this.todos;
  }

  saveToDo(todo) {
    return this.todos.push(todo);
  }

   updateToDo(id, todo) {
    return this.todos.update(id, todo);
  }

    deleteToDo(id: string) {
    return this.todos.remove(id);
  }

}
