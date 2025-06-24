export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export type Category = {
  name: string;
  icon: string;
};

export type Deal = {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  tag: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Project Management Pro",
    price: 99.99,
    image: "https://via.placeholder.com/1000",
  },
  {
    id: 2,
    name: "Code Editor Deluxe",
    price: 79.99,
    image: "https://via.placeholder.com/1000",
  },
  {
    id: 3,
    name: "Database Manager Ultimate",
    price: 149.99,
    image: "https://via.placeholder.com/1000",
  },
  {
    id: 4,
    name: "Cloud Storage Solution",
    price: 59.99,
    image: "https://via.placeholder.com/1000",
  },
  {
    id: 5,
    name: "Secure VPN Service",
    price: 39.99,
    image: "https://via.placeholder.com/1000",
  },
  {
    id: 6,
    name: "AI-Powered Analytics",
    price: 199.99,
    image: "https://via.placeholder.com/1000",
  },
];

export const categories: Category[] = [
  { name: "Marketing Tools", icon: "📈" },
  { name: "Design Software", icon: "🎨" },
  { name: "AI Solutions", icon: "🤖" },
  { name: "Project Management", icon: "📅" },
  { name: "Communication Tools", icon: "💬" },
  { name: "Analytics Platforms", icon: "📊" },
];

export const deals: Deal[] = [
  {
    id: 7,
    name: "AI Assistant Pro",
    price: 79.99,
    originalPrice: 129.99,
    image: "https://via.placeholder.com/1000",
    tag: "New Product",
  },
  {
    id: 8,
    name: "Cloud Sync Ultimate",
    price: 49.99,
    originalPrice: 89.99,
    image: "https://via.placeholder.com/1000",
    tag: "Deal of the Day",
  },
  {
    id: 9,
    name: "Marketing Automation Suite",
    price: 159.99,
    originalPrice: 249.99,
    image: "https://via.placeholder.com/1000",
    tag: "Monthly Special",
  },
  {
    id: 10,
    name: "Collaboration Platform",
    price: 29.99,
    originalPrice: 59.99,
    image: "https://via.placeholder.com/1000",
    tag: "New Deal",
  },
];
