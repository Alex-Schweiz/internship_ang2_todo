import {Component} from "@angular/core";

import { Todo } from "../shared/todo";
import { todos } from "../shared/data";

@Component({
    moduleId: module.id,
    selector: 'todo-item',
    templateUrl: `todo-item.component.html`,
    styleUrls: ['todo-item.component.css']
})

export class TodoItemComponent {

    todo: Todo = new Todo('asdasd');

}