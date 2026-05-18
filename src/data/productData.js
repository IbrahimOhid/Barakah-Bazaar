import BlouseImg from "/image/feature_img/Blouse.jpg";
import DenimJeansImg from "/image/feature_img/Denim-Jeans.jpg";
import LeatherJacketImg from "/image/feature_img/Leather-Jacket.jpg";
import SummerDressImg from "/image/feature_img/Summer-Dress.jpg";

export const featuresProduct = [
  {
    id: 1,
    name: "Elegant White Blouse",
    price: "$49.99",
    rating: "4.5",
    reviews: 42,
    badge: "New",
    badgeColor: "bg-indigo-600",
    image: BlouseImg,
  },
  {
    id: 2,
    name: "Premium Denim Jeans",
    oldPrice: "$99.99",
    price: "$79.99",
    rating: "5.0",
    reviews: 128,
    badge: "Best Seller",
    badgeColor: "bg-amber-500",
    image: DenimJeansImg,
  },
  {
    id: 3,
    name: "Classic Leather Jacket",
    price: "$199.99",
    rating: "4.0",
    reviews: 76,
    image: LeatherJacketImg,
  },
  {
    id: 4,
    name: "Floral Summer Dress",
    price: "$59.99",
    oldPrice: "$79.99",
    rating: "4.5",
    reviews: 54,
    badge: "Sale",
    badgeColor: "bg-rose-500",
    image: SummerDressImg,
  },
];
