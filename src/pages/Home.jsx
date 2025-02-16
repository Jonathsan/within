import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Product 1', price: 29.99, image: 'product1.jpg' },
  { id: 2, name: 'Product 2', price: 39.99, image: 'product2.jpg' },
  // Add more products
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to E-Shop
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover Amazing Products at Great Prices
          </p>
          <button className="bg-indigo-600 text-purple-900 px-8 py-3 rounded-lg hover:bg-indigo-700">
            Shop Now
          </button>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}