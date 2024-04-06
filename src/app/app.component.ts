import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoModel } from './models/todo.model';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [DatePipe]
})
export class AppComponent {
  addModel: TodoModel = new TodoModel()
  todos: TodoModel[] = []

  constructor(private date: DatePipe) {
    this.addModel.createdAt = this.date.transform(new Date(), "yyyy-MM-dd") ?? ""
  }

  add() {
    this.todos.push(this.addModel)
    this.addModel = new TodoModel();
    this.addModel.createdAt = this.date.transform(new Date(), "yyyy-MM-dd") ?? ""
  }

  removeByIndex(index: number) {
    this.todos.splice(index, 1)
  }
}
