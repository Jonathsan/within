import { FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';


const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Rating Stars */}
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`text-xl ${
              index < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-600 mb-4 italic">
      `{testimonial?.text || 'No review available'}`
      </p>

      {/* Customer Info */}
      <div className="flex items-center">
        <img
          src={testimonial.image || '/placeholder-avatar.jpg'}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
};



TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    image: PropTypes.string
  }).isRequired
};

export default TestimonialCard;