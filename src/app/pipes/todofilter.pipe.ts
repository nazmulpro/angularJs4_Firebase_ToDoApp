import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'todofilter'
})
export class TodofilterPipe implements PipeTransform {

  transform(todos: any, term: any): any {
    if (term === undefined) {
      return todos;
    } else {
        return todos.filter(todo => {
      return todo.isComplete === term;
    });
    }
  }

}
