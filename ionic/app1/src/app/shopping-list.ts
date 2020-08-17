export class ShoppingList {
  title: string;
  date: Date;
  items: Item[];

  constructor(title: string) {
    this.title = title;
    this.date = new Date();
  }
}

export class Item {
  title: string;
  amount: number;

  constructor(title: string, amount: number) {
    this.amount = amount;
    this.title = title;
  }
}
