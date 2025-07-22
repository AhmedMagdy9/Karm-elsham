
export interface Meal {
  category: string;
  items: Item[];
}

export interface Item {
  id: number;
  name: string;
  image: string;
  offer: boolean;
  desc: string;
  price: number;
  quantity : number;
}