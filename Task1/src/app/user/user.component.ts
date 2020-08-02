import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  id: number;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  editUser(): void {
    console.log('edit');
    const form = document.forms[0];
    const name = form.elements['name'].value;
    const surname = form.elements['surname'].value;
    const id = +form.elements['id'].value;
    const contact = form.elements['contact'].value;
    const email = form.elements['email'].value;
    this.userService.editUser(
      id,
      name,
      surname,
      email,
      contact,
      this.user.picture
    );

    this.router.navigate(['/']);
  }

  deleteUser() {
    this.userService.deleteUser(this.id);
    // TODO: Notification
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    try {
      this.id = +this.route.snapshot.paramMap.get('id');
      this.userService.getUser(this.id).subscribe((user) => (this.user = user));
    } catch (error) {
      this.router.navigate(['/error']);
    }
  }
}
