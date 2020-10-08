import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { AutofocusFixModule } from 'ngx-autofocus-fix'; // <--- new code

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AutofocusFixModule.forRoot(), // <--- new code

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
