import { Component } from '@angular/core';
import { TodoList } from './todoList';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  showComplete: boolean = false;

  private todos = new TodoList("User", [
    new TodoItem("Go for run", true),
    new TodoItem("Get flowers"),
    new TodoItem("Collect tickets"),
  ])

  get username(): string{
    return this.todos.user
  }

  get itemCount(): number{
    return this.items.length;
  }

  get items(): readonly TodoItem[]{
    return this.todos.items.filter(item => this.showComplete || !item.complete);
  }

  addItem(newItem: string){
    if(newItem != ""){
      this.todos.addItem(newItem);
    }
  }
}
