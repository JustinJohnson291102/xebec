import React from 'react';
import Hero from '../components/home/Hero';
import FourEs from '../components/home/FourEs';
import AnimatedSection from '../components/common/AnimatedSection';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Trophy, Target } from 'lucide-react';

const Home: React.FC = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Trophy, value: '1000+', label: 'Projects Completed' },
    { icon: Target, value: '98%', label: 'Success Rate' }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      <Hero />
      <FourEs />
      
      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our data-driven approach has helped hundreds of brands achieve remarkable growth
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <AnimatedSection key={stat.label} delay={index * 0.1}>
                  <div className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8" />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's create something extraordinary together. Get in touch today.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 group"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;