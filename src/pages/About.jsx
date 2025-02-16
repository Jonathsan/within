import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Passionate about creating exceptional shopping experiences',
      image: '/team/sarah.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Head of Operations',
      bio: 'Ensuring seamless logistics and customer satisfaction',
      image: '/team/michael.jpg'
    },
    {
      id: 3,
      name: 'Emma Wilson',
      role: 'Product Curator',
      bio: 'Expert in selecting quality products for our customers',
      image: '/team/emma.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Story</h1>
          <p className="text-xl text-center text-gray-600">
            YOU ARE NOW WITHIN
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl text-center font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 text-center mb-6">
              Within yourself. Within the questions. Within the journey. Come as you are. With your questions, your doubts, your hopes,
              and your desire to grow. Within is a space for self-discovery,
              reflection and transformation- where you can explore who you 
              are and who you are becoming. We create thoughtfully designed 
              tools that guide you through life's inner work- helping you explore 
              your emotions, challenge limiting beliefs, and embrace personal growth.
              Our card sets and guided journals offer structured yet open-ended prompts
             to encourage meaningful self-exploration. Whether you're working through 
             self-forgiveness, seeking clarity, or reconnecting with yourself, Within
              provides a supportive framework for your journey. 
              True growth starts from within- we can only guide you through it.
            </p>
            <Link 
              to="/products"
              className="bg-duskyRed  text-white px-6 py-3 rounded-lg hover:bg-duskyRed  flex items-center w-max"
            >
              Explore Products
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
          {/*<img 
            src="/about-mission.jpg" 
            alt="Our Team" 
            className="rounded-lg shadow-xl"
          />*/}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map(member => (
              <div key={member.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-indigo-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <p className="text-4xl font-bold text-indigo-600 mb-2">8+</p>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-indigo-600 mb-2">50K+</p>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-indigo-600 mb-2">100%</p>
              <p className="text-gray-600">Satisfaction Guarantee</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-indigo-600 mb-2">24/7</p>
              <p className="text-gray-600">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;