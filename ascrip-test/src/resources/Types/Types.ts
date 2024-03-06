export interface ProductType {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface FilterTypes {
  category: string;
  options: { value: string; label: string }[];
}
