import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from './user';
import mockUsers from './mock-users';
import { MessagesService } from './messages.service';
import pictures from './pictures';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[];

  constructor(private messagesService: MessagesService) {
    const users = localStorage.getItem('users');
    if (users) {
      const usersObject = JSON.parse(users);
      this.users = usersObject;
      messagesService.add('Welcome', 'Loaded in users', 'default');
      return;
    }

    this.users = mockUsers;
    localStorage.setItem('users', JSON.stringify(this.users));

    messagesService.add('Welcome', 'Added new mock users', 'default');
  }

  newUser(
    id: number,
    name: string,
    surname: string,
    contact: string,
    email: string
  ): void {
    const rando = Math.random() * pictures.length;

    const u = this.users.find((user) => user.id === id);
    if (u) {
      throw Error('User with id exists');
    }
    const picture = pictures.slice(rando, rando + 1)[0];

    const user = new User(id, name, surname, contact, email, picture);
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  editUser(
    id: number,
    name: string,
    surname: string,
    contact: string,
    email: string,
    picture: string
  ): void {
    this.users = this.users.map((user) =>
      user.id !== id
        ? user
        : new User(id, name, surname, contact, email, picture)
    );
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  deleteUser(id: number): Observable<User[]> {
    this.users = this.users.filter((user) => user.id !== id);
    localStorage.setItem('users', JSON.stringify(this.users));
    return of(this.users);
  }

  getUser(id: number): Observable<User> {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw Error('No such user');
    }
    return of(user);
  }

  getUsers(): Observable<User[]> {
    localStorage.setItem('users', JSON.stringify(this.users));
    return of(this.users);
  }
}
