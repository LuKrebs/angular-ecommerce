export class Product {

  constructor(
    public name?: string,
    public qty?: number,
    public available?: boolean,
    public price?: number,
    public photos?: any,
    public category?: string,
  ) { }

}

export interface ProductInterface {
  name?: string,
  qty?: number,
  available?: boolean,
  price?: number,
  photos?: any,
  category?: string,
}