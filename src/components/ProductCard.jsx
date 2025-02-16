export default function ProductCard({ product }) {
    return (
      <div className="bg-white py-10 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow ">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <p className="text-indigo-600 font-bold mt-2">${product.price}</p>
          <button className="mt-4 w-full bg-indigo-600 text-black py-2 rounded hover:bg-indigo-700">
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
  import PropTypes from 'prop-types';

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};
