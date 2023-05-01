import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  tasks: any = []

  ngOnInit(): void {

  }

  title = 'mytodoapp';

  newTask(content: string) {
    // console.log(content);
    if (content != '') {
      this.tasks.push({ id: this.tasks.length, title: content })
      console.log(this.tasks);
    }
  }

  removeTask(id: any) {
    this.tasks = this.tasks.filter((item: { id: any }) => item.id != id)
  }

  removeAll() {
    this.tasks = []
  }
}
