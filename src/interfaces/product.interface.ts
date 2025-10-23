export interface Product {
  id:            number;
  itemCode:      string;
  itemShortDesc: string;
  itemLongDesc:  string;
  itemColor:     null | string;
  itemUMedida:   string;
  itemMarca:     null | string;
  itemWarranty:  null | string;
  itemSize:      null | string;
  itemValue:     number;
  moneda:        number | null;
  deliveryDays:  number;
  categoryId:    number;
  sellerId:      number;
  pregunta:      boolean;
  stockProducto: null;
}

export type Category = 'crafts' | 'office' | 'school' | 'all';
