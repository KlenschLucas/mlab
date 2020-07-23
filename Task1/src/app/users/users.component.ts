import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { validate } from 'validate.js';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users = new Array();
  selectedUser: User;
  selectedUserIndex: Number;
  newUserCompleted: Boolean;
  isEdited: Boolean;

  selectUser(i: number): void {
    this.selectedUserIndex = i;
    this.selectedUser = this.users[i];
  }

  setIsEdited(): void {
    this.isEdited = true;
  }

  editUser(): void {
    const form = document.forms[0];
    const name = form.elements['name'].value;
    const surname = form.elements['surname'].value;
    const id = form.elements['id'].value;
    const contact = form.elements['contact'].value;
    const email = form.elements['email'].value;
    console.log({ name, surname, id, contact, email });
  }

  addUser(): void {
    let user = new User();
    this.newUserCompleted = false;
    this.users.push(user);
    this.selectUser(this.users.length - 1);
  }

  deleteAllUsers(): void {
    this.users = [];
  }

  deleteUser(i: number): void {
    this.users.splice(i, 0);
  }

  ngOnInit(): void {
    this.newUserCompleted = true;
    this.selectedUserIndex = -1;
  }
}
