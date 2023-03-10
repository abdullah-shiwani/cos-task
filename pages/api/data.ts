import { Product, Review } from "../../types";

export const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 10.0,
    description: "Product 1 description",
    category: "clothing",
    image: "https://via.placeholder.com/150",
    images: [
      "https://via.placeholder.com/150/0000FF/808080",
      "https://via.placeholder.com/150/FF0000/808080",
      "https://via.placeholder.com/150/00FF00/808080",
    ],
  },
  {
    id: 2,
    name: "Product 2",
    price: 20.0,
    description: "Product 2 description",
    category: "accessories",
    image: "https://via.placeholder.com/150",
    images: [
      "https://via.placeholder.com/150/0000FF/808080",
      "https://via.placeholder.com/150/FF0000/808080",
      "https://via.placeholder.com/150/00FF00/808080",
    ],
  },
  {
    id: 3,
    name: "Product 3",
    price: 30.0,
    description: "Product 3 description",
    category: "shoes",
    image: "https://via.placeholder.com/150",
    images: [
      "https://via.placeholder.com/150/0000FF/808080",
      "https://via.placeholder.com/150/FF0000/808080",
      "https://via.placeholder.com/150/00FF00/808080",
    ],
  },
  {
    id: 4,
    name: "Product 4",
    price: 40.0,
    description: "Product 4 description",
    category: "clothing",
    image: "https://via.placeholder.com/150",
    images: [
      "https://via.placeholder.com/150/0000FF/808080",
      "https://via.placeholder.com/150/FF0000/808080",
      "https://via.placeholder.com/150/00FF00/808080",
    ],
  },
  {
    id: 5,
    name: "Product 5",
    price: 50.0,
    description: "Product 5 description",
    category: "accessories",
    image: "https://via.placeholder.com/150",
    images: [
      "https://via.placeholder.com/150/0000FF/808080",
      "https://via.placeholder.com/150/FF0000/808080",
      "https://via.placeholder.com/150/00FF00/808080",
    ],
  },
];

export const reviews: Review[] = [
  {
    id: 1,
    productId: 1,
    name: "John Doe",
    rating: 5,
    comment: "Great product",
    createdAt: "2021-01-01T00:00:00.000Z",
  },
  {
    id: 2,
    productId: 1,
    name: "Jane Doe",
    rating: 4,
    comment: "Good product",
    createdAt: "2021-01-01T00:00:00.000Z",
  },
  {
    id: 3,
    productId: 4,
    name: "John Doe",
    rating: 5,
    comment: "Good stuff",
    createdAt: "2021-01-01T00:00:00.000Z",
  },
  {
    id: 4,
    productId: 4,
    name: "Jane Doe",
    rating: 5,
    comment: "Great product",
    createdAt: "2021-01-01T00:00:00.000Z",
  },
  {
    id: 5,
    productId: 5,
    name: "John Doe",
    rating: 3,
    comment: "Not bad",
    createdAt: "2021-01-01T00:00:00.000Z",
  },
  {
    id: 6,
    productId: 5,
    name: "Jane Doe",
    rating: 1,
    comment: "Terrible",
    createdAt: "2021-01-01T00:00:00.000Z",
  },
  {
    id: 7,
    productId: 2,
    name: "John Doe",
    rating: 5,
    comment: "Perfect product for me",
    createdAt: "2021-01-01T00:00:00.000Z",
  },
];