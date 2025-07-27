
export interface Meal {
  category: string;
  items: Item[];
}

export interface Item {
  firebaseId: string; // ده اللي هيتولد تلقائي
  id: number;
  name: string;
  desc: string;
  image: string;
  price: number;
  offer: boolean;
  quantity: number;
}






























