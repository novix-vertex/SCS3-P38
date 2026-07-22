import { useState } from "react"
import Product from "./components/Product";

const App = () => {
  const [products, setProducts] = useState([
  {
    "id": 1,
    "name": "AirFlex Runner",
    "category": "Running Shoes",
    "price": 89.99,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    "id": 2,
    "name": "Urban Sprint",
    "category": "Casual Shoes",
    "price": 74.5,
    "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772"
  },
  {
    "id": 3,
    "name": "Trail Master X",
    "category": "Hiking Shoes",
    "price": 119.99,
    "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
  },
  {
    "id": 4,
    "name": "Street Glide",
    "category": "Sneakers",
    "price": 69.99,
    "image": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
  },
  {
    "id": 5,
    "name": "Power Jump Pro",
    "category": "Basketball Shoes",
    "price": 139.99,
    "image": "https://images.unsplash.com/photo-1512374382149-233c42b6a83b"
  },
  {
    "id": 6,
    "name": "Cloud Walk",
    "category": "Walking Shoes",
    "price": 64.99,
    "image": "https://images.unsplash.com/photo-1608231387042-66d1773070a5"
  },
  {
    "id": 7,
    "name": "Velocity Elite",
    "category": "Running Shoes",
    "price": 129.99,
    "image": "https://images.unsplash.com/photo-1605348532760-6753d2c43329"
  },
  {
    "id": 8,
    "name": "Urban Edge",
    "category": "Sneakers",
    "price": 84.99,
    "image": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2"
  },
  {
    "id": 9,
    "name": "Peak Climber",
    "category": "Hiking Shoes",
    "price": 124.5,
    "image": "https://images.unsplash.com/photo-1520256862855-398228c41684"
  },
  {
    "id": 10,
    "name": "Sprint Max",
    "category": "Running Shoes",
    "price": 94.99,
    "image": "https://images.unsplash.com/photo-1491553895911-0055eca6402d"
  },
  {
    "id": 11,
    "name": "Retro Classic",
    "category": "Casual Shoes",
    "price": 79.99,
    "image": "https://images.unsplash.com/photo-1539185441755-769473a23570"
  },
  {
    "id": 12,
    "name": "Court King",
    "category": "Tennis Shoes",
    "price": 109.99,
    "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
  },
  {
    "id": 13,
    "name": "Swift Motion",
    "category": "Training Shoes",
    "price": 99.99,
    "image": "https://images.unsplash.com/photo-1603808033192-082d6919d3e1"
  },
  {
    "id": 14,
    "name": "Desert Trek",
    "category": "Hiking Shoes",
    "price": 114.99,
    "image": "https://images.unsplash.com/photo-1607522370275-f14206abe5d3"
  },
  {
    "id": 15,
    "name": "Neon Dash",
    "category": "Running Shoes",
    "price": 104.99,
    "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3"
  },
  {
    "id": 16,
    "name": "City Comfort",
    "category": "Walking Shoes",
    "price": 72.99,
    "image": "https://images.unsplash.com/photo-1600269452121-4f2416e55c28"
  },
  {
    "id": 17,
    "name": "Blaze Court",
    "category": "Basketball Shoes",
    "price": 149.99,
    "image": "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b"
  },
  {
    "id": 18,
    "name": "Fusion Fit",
    "category": "Training Shoes",
    "price": 89.5,
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
  },
  {
    "id": 19,
    "name": "Stride One",
    "category": "Sneakers",
    "price": 82.99,
    "image": "https://images.unsplash.com/photo-1607522370275-f14206abe5d3"
  },
  {
    "id": 20,
    "name": "Marathon Pro",
    "category": "Running Shoes",
    "price": 159.99,
    "image": "https://images.unsplash.com/photo-1543508282-6319a3e2621f"
  }
]
);

  function handleDelete(id) {
    const filteredProducts = products.filter((p) => {
      return p.id !== id;
    });
    setProducts(filteredProducts);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-3xl font-bold text-center">
        Shoe Store
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>

  )
}

export default App