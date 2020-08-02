import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  id: number;
  name: string;
  surname: string;
  email: string;
  contact: string;
  picture: string;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  saveUser(): void {
    const form = document.forms[0];
    const name = form.elements['name'].value;
    const surname = form.elements['surname'].value;
    const id = form.elements['id'].value;
    const contact = form.elements['contact'].value;
    const email = form.elements['email'].value;

    this.userService.newUser(id, name, surname, email, contact);
    this.router.navigate(['/']);
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}
