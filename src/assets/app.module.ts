import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// angualrfire imports
import { AngularFireModule   } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

// service

import { TodoService } from './services/todo.service';


import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodofilterPipe } from './pipes/todofilter.pipe';


const appRoutes: Routes  = [
  { path: '', component: TodoComponent }
];


export const angularFireConfig  = {
      apiKey: 'AIzaSyDhHqudcAafJRLINiz43elbAFXlMmkhp80',
    authDomain: 'todoapp-b7afd.firebaseapp.com',
    databaseURL: 'https://todoapp-b7afd.firebaseio.com',
    projectId: 'todoapp-b7afd',
    storageBucket: '',
    messagingSenderId: '264051620159'
};

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodofilterPipe
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(angularFireConfig),
    RouterModule.forRoot(appRoutes),
     FormsModule
  ],
  providers: [
    AngularFireDatabase,
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
