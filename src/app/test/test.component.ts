import { Component } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  constructor(private testService: TestService) {}

  user:any
  createUser() {
    this.user = this.testService.createUser('John Doe');
    console.log('User created:', this.user);
  }
}
