export class Message {
  title: string;
  message: string;
  type: string;
  classname: string;

  constructor(title: string, message: string, type: string) {
    this.title = title;
    this.message = message;
    this.type = type;
  }
}
