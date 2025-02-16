import TestimonialCard from '../components/TestimonialCard';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO",
    company: "Tech Corp",
    rating: 5,
    text: "Excellent products and fast delivery! Highly recommended.",
    image: "/john-doe.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Marketing Manager",
    company: "Ad Agency",
    rating: 4,
    text: "Great quality and support!",
    image: "/jane-smith.jpg",
  },
];

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Customer Testimonials
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.length > 0 ? (
            testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))
          ) : (
            <p className="text-center text-gray-500">No testimonials available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
