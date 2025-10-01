import type {Product} from "../dao/Product.ts";

const products: Product[] = [
  { id: "feature1", name: "Feature 1", img: "/img/featured/feature-1.jpg", categories: "oranges fresh-meat" },
  { id: "feature2", name: "Feature 2", img: "/img/featured/feature-2.jpg", categories: "vegetables fastfood" },
  { id: "feature3", name: "Feature 3", img: "/img/featured/feature-3.jpg", categories: "vegetables fresh-meat" },
  { id: "feature4", name: "Feature 4", img: "/img/featured/feature-4.jpg", categories: "fastfood oranges" },
  { id: "feature5", name: "Feature 5", img: "/img/featured/feature-5.jpg", categories: "fresh-meat vegetables" },
  { id: "feature6", name: "Feature 6", img: "/img/featured/feature-6.jpg", categories: "oranges fastfood" },
  { id: "feature7", name: "Feature 7", img: "/img/featured/feature-7.jpg", categories: "fresh-meat vegetables" },
  { id: "feature8", name: "Feature 8", img: "/img/featured/feature-8.jpg", categories: "fastfood vegetables" },
];


export class ProductDB {
  static getAll(): Product[] {
    return products;
  }

  static getById(id: string): Product | undefined {
    return products.find(p => p.id === id);
  }
}
