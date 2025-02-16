import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // ✅ Use Link for internal navigation

const Resources = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    // Simulating fetching resources from an API or local data
    const fetchedResources = [
      { id: 1, title: "Product Guide", link: "/guides/product-guide" },
      { id: 2, title: "FAQs", link: "/faqs" },
      { id: 3, title: "Customer Support", link: "/support" },
      { id: 4, title: "Return Policy", link: "/returns" },
    ];
    setResources(fetchedResources);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-14 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Helpful Resources</h2>
      <ul className="space-y-3">
        {resources.map((resource) => (
          <li key={resource.id} className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200">
            <Link to={resource.link} className="text-indigo-600 hover:underline">
              {resource.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;
