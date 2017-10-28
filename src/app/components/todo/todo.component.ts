import { Component, OnInit } from '@angular/core';
import { TODO } from '../../models/todo';
import { TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  today = new Date().toISOString();
  todos: TODO[]= [];

  todo = new TODO();

  filterBy = undefined;
  totalCompleteTodo = 0;
  isSelectAllEnable = false;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
     this.todoService.getToDo().subscribe(todos => {
      this.todos = todos;
      this.countCompleteTodo();
     });

  }

  addToDo({value, valid }: {value: any, valid: boolean }) {
    if (valid) {
       this.todoService.saveToDo(this.todo);
      this.todo = new TODO();
    }
    }

  completeTodo(todo) {
    todo.isComplete = !todo.isComplete;
    this.todoService.updateToDo(todo.$key, todo);
    this.countCompleteTodo();

  }

  removeTodo(id) {
    this.todoService.deleteToDo(id);
  }

  selectAllTaskComplete() {
     this.isSelectAllEnable = !this.isSelectAllEnable;
     let newTodoList =  this.todos;
     for (let i = 0; i < newTodoList.length; i++) {
              if (this.isSelectAllEnable) {
                 newTodoList[i]['isComplete'] = true;
              } else {
                 newTodoList[i]['isComplete'] = false;
              }
              this.todoService.updateToDo(newTodoList[i]['$key'], newTodoList[i]);
            }
            this.filterBy = undefined;
  }

  deleteAllCompletedTask() {
     let newTodoList =  this.todos;
     for (let i = 0; i < newTodoList.length; i++) {
       if (newTodoList[i]['isComplete']) {
             this.todoService.deleteToDo(newTodoList[i]['$key']);
       }
     }
       this.isSelectAllEnable = false;

        this.filterBy = undefined;
  }

  viewFilterTodo(filterdata) {
     if (filterdata === undefined) {
         this.filterBy = undefined;
     } else {
       this.filterBy = filterdata;
     }
    this.isSelectAllEnable = false;
  }

    countCompleteTodo() {
     this.totalCompleteTodo = 0;
     for (let i = 0; i < this.todos.length; i++) {
       if (this.todos[i]['isComplete']) {
           this.totalCompleteTodo += 1;
         }
        }
  }

}
