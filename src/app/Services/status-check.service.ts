import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusCheckService {

  availableBooks = [];
  issuedBooks = [];
  
  constructor() { }
}
