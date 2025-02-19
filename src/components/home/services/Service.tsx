import  service from "@/content/home/service";
import { CheckCircle } from "lucide-react";

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-white py-12 px-4 lg:px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {service.map((service, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-orange-600 mb-4">
                {service.title}
              </h3>
              <ul className="space-y-3">
                {service.services.map((item, i) => (
                  <li key={i} className="flex items-center text-purple-900">
                    <CheckCircle className="text-orange-500 w-5 h-5 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
