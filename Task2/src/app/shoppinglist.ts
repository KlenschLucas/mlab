export class Item {
  index: number;
  title: string;
  amount: number;

  constructor(index: number, title: string, amount: number) {
    this.index = index;
    this.title = title;
    this.amount = amount;
  }
}
