import { Warehouse } from './warehouse.model';

export class Product {
  materialName!: string;
  productId!: number;
  description!: string;
  quantityAvailable!: number;
  quantityUnit!: any;
  warehouse!: Warehouse;
}
