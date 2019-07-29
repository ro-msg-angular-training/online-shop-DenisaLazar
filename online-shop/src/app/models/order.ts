export class Order {
  private customer: string; // name of the customer who placed the order
  private products: Map<number, number>; // {productId, quantity}

  constructor() {
    this.customer = '';
    this.products = new Map<number, number>();
  }

  setCustomer(customer: string) {
    this.customer = customer;
  }

  setProducts(products: Map<number, number>) {
    this.products = products;
  }

  getCustomer(): string {
    return this.customer;
  }

  getProducts(): Map<number, number>{
    return this.products;
  }
}
