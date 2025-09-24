import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/common/AnimatedSection';
import { Code, Smartphone, Search, Zap, Monitor, Tablet } from 'lucide-react';

const WebDevelopment: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Bespoke websites built from the ground up to meet your unique business requirements.',
      features: ['React/Next.js', 'Node.js Backend', 'Database Design', 'API Integration']
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Responsive websites that provide exceptional experiences across all devices.',
      features: ['Progressive Web Apps', 'Touch Optimization', 'Cross-browser Testing', 'Performance Optimization']
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Built-in SEO best practices to ensure your website ranks well in search results.',
      features: ['Technical SEO', 'Page Speed Optimization', 'Schema Markup', 'Meta Optimization']
    },
    {
      icon: Zap,
      title: 'Performance Focus',
      description: 'Lightning-fast websites optimized for speed and user experience.',
      features: ['CDN Integration', 'Image Optimization', 'Caching Strategy', 'Core Web Vitals']
    }
  ];

  const technologies = [
    { name: 'React', logo: '⚛️', description: 'Modern JavaScript library for building user interfaces' },
    { name: 'Next.js', logo: '🚀', description: 'Full-stack React framework for production' },
    { name: 'TypeScript', logo: '📘', description: 'Type-safe JavaScript for better code quality' },
    { name: 'Tailwind CSS', logo: '🎨', description: 'Utility-first CSS framework for rapid styling' },
    { name: 'Node.js', logo: '💚', description: 'JavaScript runtime for backend development' },
    { name: 'MongoDB', logo: '🍃', description: 'NoSQL database for modern applications' }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understanding your goals, audience, and technical requirements',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Creating wireframes and interactive prototypes for validation',
      icon: '🎨'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Building your website with clean code and thorough testing',
      icon: '⚡'
    },
    {
      step: '04',
      title: 'Launch & Optimization',
      description: 'Deploying your site and continuously optimizing performance',
      icon: '🚀'
    }
  ];

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Website Development
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Custom websites that combine stunning design with powerful functionality
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* UI/UX Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Design Philosophy
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                We believe great websites are born from the perfect marriage of beautiful design 
                and flawless functionality. Every element serves a purpose.
              </p>
              <ul className="space-y-4">
                {[
                  'User-centered design approach',
                  'Accessibility and inclusion first',
                  'Performance-optimized experiences',
                  'Scalable and maintainable code'
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                {/* Device Mockups */}
                <div className="relative">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-0 right-0 bg-gray-100 rounded-lg p-4 shadow-lg"
                  >
                    <Smartphone className="h-16 w-16 text-blue-600" />
                    <div className="text-sm text-gray-600 mt-2">Mobile</div>
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="bg-gray-100 rounded-lg p-6 shadow-lg"
                  >
                    <Monitor className="h-20 w-20 text-blue-600 mx-auto" />
                    <div className="text-sm text-gray-600 mt-3 text-center">Desktop</div>
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="absolute bottom-0 left-0 bg-gray-100 rounded-lg p-4 shadow-lg"
                  >
                    <Tablet className="h-12 w-12 text-blue-600" />
                    <div className="text-sm text-gray-600 mt-2">Tablet</div>
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive web development solutions for modern businesses
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Technologies We Love
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern tools and frameworks for building exceptional web experiences
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <AnimatedSection key={tech.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{tech.logo}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-gray-600 text-sm">{tech.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.1}>
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                      {item.step}
                    </div>
                    <div className="absolute -top-2 -right-2 text-2xl">{item.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Checklist Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                SEO-Ready From Day One
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Every website we build comes with comprehensive SEO optimization 
                to help you rank higher in search results.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: '🎯', title: 'Technical SEO', status: 'Optimized' },
                  { icon: '⚡', title: 'Page Speed', status: '90+ Score' },
                  { icon: '📱', title: 'Mobile-Friendly', status: 'Perfect' },
                  { icon: '🔍', title: 'Schema Markup', status: 'Implemented' },
                  { icon: '📊', title: 'Analytics Setup', status: 'Configured' },
                  { icon: '🖼️', title: 'Image Optimization', status: 'Automated' }
                ].map((item) => (
                  <div key={item.title} className="flex items-center space-x-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-900">{item.title}</div>
                      <div className="text-sm text-green-600">{item.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-green-600 mb-2">95+</div>
                  <div className="text-gray-600">Average PageSpeed Score</div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Performance</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '95%' }} />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Accessibility</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '98%' }} />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Best Practices</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '100%' }} />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">SEO</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '92%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;