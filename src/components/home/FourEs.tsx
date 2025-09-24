import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { fourEs } from '../../data/constants';
import AnimatedSection from '../common/AnimatedSection';

const FourEs: React.FC = () => {
  const { scrollY } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The 4Es Framework
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven methodology that transforms brands into digital powerhouses
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {fourEs.map((item, index) => (
            <AnimatedSection
              key={item.title}
              delay={index * 0.1}
              animation="scale"
            >
              <motion.div
                style={{
                  transform: `translateY(${scrollY * 0.05 * (index + 1)}px)`,
                }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                  <div className="text-4xl mb-6 text-center">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {item.description}
                  </p>
                  
                  {/* Decorative element */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-teal-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Parallax Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
            className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"
          />
          <motion.div
            style={{
              transform: `translateY(${scrollY * -0.1}px)`,
            }}
            className="absolute bottom-20 right-10 w-32 h-32 bg-teal-200 rounded-full opacity-20"
          />
        </div>
      </div>
    </section>
  );
};

export default FourEs;