import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { MessagesService } from '../messages.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[];
  filteredUsers: User[] = [];
  searchValue: string = '';

  constructor(
    private userService: UserService,
    private messagesService: MessagesService
  ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  deleteUser(id: number): void {
    const user = this.users.find((user) => user.id === id);
    this.userService.deleteUser(id).subscribe((users) => (this.users = users));
    this.messagesService.add(
      'Deleted User',
      `User ${user.name} with id: ${user.id} was deleted successfully`,
      'danger'
    );
  }

  search(): void {
    this.filteredUsers = this.users.filter(
      (user) =>
        user.name.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        user.surname.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        ('' + user.id).toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }
}
