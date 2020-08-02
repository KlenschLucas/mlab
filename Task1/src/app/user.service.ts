import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from './user';
import mockUsers from './mock-users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[];

  constructor() {
    this.users = mockUsers;
  }

  newUser(
    id: number,
    name: string,
    surname: string,
    contact: string,
    email: string
  ): void {
    const rando = Math.random() * this.users.length;

    const u = this.users.find((user) => user.id === id);
    if (u) {
      throw Error('User with id exists');
    }
    const picture = this.users.slice(rando, rando + 1)[0].picture;

    const user = new User(id, name, surname, contact, email, picture);
    this.users.push(user);
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
  }

  deleteUser(id: number): Observable<User[]> {
    this.users = this.users.filter((user) => user.id !== id);
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
    return of(this.users);
  }
}
