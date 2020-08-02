export class User {
  id: number;
  name: string;
  surname: string;
  email: string;
  contact: string;
  picture: string;

  constructor(
    id: number,
    name: string,
    surname: string,
    email: string,
    contact: string,
    picture: string
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.contact = contact;
    this.picture = picture;
  }
}
