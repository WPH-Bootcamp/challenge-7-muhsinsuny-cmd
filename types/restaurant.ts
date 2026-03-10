// types/restaurant.ts

export interface Menu {
  name: string;
  id: number;
  foodName: string;
  price: number;
  type: 'food' | 'drink';
  image: string;
  star: number;
}

export interface ReviewUser {
  id: number;
  name: string;
  avatar: string;
  createdAt: string;
}

export interface Review {
  id: number;
  star: number;
  comment: string;
  createdAt: string;
  user: ReviewUser;
  totalReviews: number;
}

export interface RestaurantDetail {
  id: number;
  name: string;
  star: number;
  averageRating: number;
  place: string;
  logo: string;
  images: string[];
  category: string;
  totalMenus: number;
  menus: Menu[];
  reviews: Review[];
  distance?: string;
}
