import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  
  createUser(name: string) {
    return { name };
  }
  
  constructor() { }
}
