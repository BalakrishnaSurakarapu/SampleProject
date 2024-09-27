import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sampleProject';
  users: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users ,'ssssssshhhhhhhhhhh')
    }, error => {
      console.error('Error fetching users', error);
    });
  }
}
