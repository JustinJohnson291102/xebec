import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/services/ServiceCard';
import Modal from '../components/common/Modal';
import AnimatedSection from '../components/common/AnimatedSection';
import { services } from '../data/constants';
import { Service } from '../types';
import { Check, Star } from 'lucide-react';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const closeModal = () => setSelectedService(null);

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive digital solutions to elevate your brand and drive growth
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.1}>
                <ServiceCard
                  service={service}
                  onClick={() => setSelectedService(service)}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures exceptional results every time
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your business, goals, and target audience' },
              { step: '02', title: 'Strategy', description: 'Developing a comprehensive digital strategy tailored to your needs' },
              { step: '03', title: 'Execution', description: 'Implementing solutions with precision and attention to detail' },
              { step: '04', title: 'Optimization', description: 'Continuously refining and improving performance' }
            ].map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.1}>
                <div className="text-center group">
                  <div className="text-6xl font-bold text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <Modal
        isOpen={!!selectedService}
        onClose={closeModal}
        title={selectedService?.title}
      >
        {selectedService && (
          <div className="space-y-8">
            <div className="text-center">
              <div className="text-6xl mb-4">{selectedService.icon}</div>
              <p className="text-xl text-gray-600">{selectedService.description}</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What's Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedService.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="h-5 w-5 text-blue-600" />
                <h4 className="text-lg font-semibold text-gray-900">Why Choose This Service?</h4>
              </div>
              <p className="text-gray-600">
                Our expert team combines industry best practices with innovative approaches 
                to deliver exceptional results that drive real business growth and ROI.
              </p>
            </div>

            <div className="flex justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200">
                Get Started Today
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Services;