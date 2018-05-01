export class Product {

  categories = [
    { value: 'tiara', text: 'Tiara' },
    { value: 'calcinha', text: 'Calcinha' },
    { value: 'sapatinho', text: 'Sapatinho' },
    { value: 'bico-de-pato', text: 'Bico de pato' },
    { value: 'gravata', text: 'Gravata' },
    { value: 'suspensorio', text: 'Suspensório' },
  ];

  options = [
    { value: true, text: 'Sim' },
    { value: false, text: 'Não' },
  ];

  initialValues = {
    name: '',
    available: true,
    category: '',
    price: '',
    qty: 1,
    photos: [],
  }

}

export interface ProductInterface {
  name?: string,
  qty?: number,
  available?: boolean,
  price?: number,
  photos?: any,
  category?: string,
}