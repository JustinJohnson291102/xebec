import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100 hover:border-blue-200"
    >
      {/* Icon */}
      <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed">
        {service.description}
      </p>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {service.features.slice(0, 3).map((feature) => (
          <li key={feature} className="text-sm text-gray-500 flex items-center space-x-2">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="flex items-center space-x-2 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
        <span>Learn More</span>
        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-teal-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

export default ServiceCard;