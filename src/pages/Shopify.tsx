import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/common/AnimatedSection';
import { ShoppingCart, Smartphone, TrendingUp, Zap, CreditCard, Globe, Settings, BarChart3, Users, Award, CheckCircle, Star } from 'lucide-react';

const Shopify: React.FC = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: 'Custom Shopify Store Development',
      description: 'Bespoke Shopify stores designed and developed to reflect your brand identity and optimize for conversions.',
      features: [
        'Custom theme development',
        'Brand-focused design',
        'Mobile-responsive layouts',
        'Performance optimization',
        'SEO-friendly structure',
        'Conversion rate optimization',
        'Custom functionality',
        'Third-party integrations'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Commerce Optimization',
      description: 'Mobile-first Shopify stores that provide seamless shopping experiences across all devices.',
      features: [
        'Mobile-first design approach',
        'Touch-optimized interfaces',
        'Fast mobile loading speeds',
        'Progressive web app features',
        'Mobile payment optimization',
        'Responsive product galleries',
        'Mobile checkout optimization',
        'Cross-device synchronization'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'Shopify Plus Enterprise Solutions',
      description: 'Advanced Shopify Plus implementations for high-volume businesses with complex requirements.',
      features: [
        'Shopify Plus setup and migration',
        'Advanced automation workflows',
        'Multi-store management',
        'B2B functionality',
        'Advanced analytics and reporting',
        'Custom app development',
        'Enterprise integrations',
        'Scalability optimization'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Settings,
      title: 'Shopify App Development',
      description: 'Custom Shopify apps and integrations to extend your store functionality and streamline operations.',
      features: [
        'Custom app development',
        'Third-party integrations',
        'API development and management',
        'Workflow automation',
        'Inventory management solutions',
        'Customer service integrations',
        'Marketing automation tools',
        'Analytics and reporting apps'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const features = [
    {
      icon: CreditCard,
      title: 'Payment Gateway Integration',
      description: 'Seamless integration with multiple payment gateways for global commerce',
      stats: '50+ Payment Methods'
    },
    {
      icon: Globe,
      title: 'Multi-Currency Support',
      description: 'Sell globally with automatic currency conversion and localization',
      stats: '130+ Currencies'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive reporting and analytics for data-driven decisions',
      stats: '99% Uptime'
    },
    {
      icon: Users,
      title: 'Customer Management',
      description: 'Advanced customer segmentation and personalization features',
      stats: '24/7 Support'
    }
  ];

  const caseStudies = [
    {
      title: 'Fashion E-commerce Transformation',
      client: 'StyleVibe Fashion',
      category: 'Fashion & Apparel',
      challenge: 'Outdated platform with poor mobile experience and low conversion rates',
      solution: 'Complete Shopify migration with custom theme, mobile optimization, and conversion improvements',
      results: [
        '500% increase in mobile conversions',
        '300% growth in overall revenue',
        '200% improvement in page load speed',
        '150% increase in average order value'
      ],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['Shopify Plus', 'Custom Theme', 'Mobile Optimization', 'Payment Integration']
    },
    {
      title: 'B2B Wholesale Platform',
      client: 'Industrial Supply Co.',
      category: 'B2B Wholesale',
      challenge: 'Complex pricing structures and bulk ordering requirements',
      solution: 'Shopify Plus implementation with custom B2B functionality and pricing tiers',
      results: [
        '400% increase in B2B orders',
        '250% improvement in order processing efficiency',
        '300% growth in wholesale revenue',
        '180% increase in customer retention'
      ],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['Shopify Plus', 'B2B Features', 'Custom Pricing', 'ERP Integration']
    },
    {
      title: 'Multi-Brand E-commerce Empire',
      client: 'Luxury Goods Group',
      category: 'Luxury Retail',
      challenge: 'Managing multiple brands with different requirements on one platform',
      solution: 'Multi-store Shopify Plus setup with centralized management and brand-specific customizations',
      results: [
        '600% increase in online sales',
        '200% improvement in brand consistency',
        '300% growth in customer lifetime value',
        '150% increase in operational efficiency'
      ],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['Shopify Plus', 'Multi-Store', 'Brand Management', 'Advanced Analytics']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'Understanding your business goals, target audience, and e-commerce requirements',
      icon: Users,
      activities: [
        'Business requirements analysis',
        'Competitor research and analysis',
        'User experience planning',
        'Technical architecture design'
      ]
    },
    {
      step: '02',
      title: 'Design & Development',
      description: 'Creating custom designs and developing your Shopify store with best practices',
      icon: Settings,
      activities: [
        'Custom theme development',
        'Mobile-responsive design',
        'Product catalog setup',
        'Payment gateway integration'
      ]
    },
    {
      step: '03',
      title: 'Testing & Optimization',
      description: 'Comprehensive testing and optimization for performance and conversions',
      icon: BarChart3,
      activities: [
        'Quality assurance testing',
        'Performance optimization',
        'Conversion rate optimization',
        'SEO implementation'
      ]
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'Going live with your store and providing ongoing support and maintenance',
      icon: Zap,
      activities: [
        'Store launch and migration',
        'Staff training and documentation',
        'Ongoing maintenance and updates',
        'Performance monitoring'
      ]
    }
  ];

  const stats = [
    { value: '500+', label: 'Shopify Stores Built', icon: ShoppingCart },
    { value: '300%', label: 'Average Revenue Increase', icon: TrendingUp },
    { value: '99.9%', label: 'Store Uptime', icon: Award },
    { value: '24/7', label: 'Support Available', icon: Users }
  ];

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-blue-900/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <AnimatedSection>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Shopify Development
              <span className="block bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                That Drives Sales
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto mb-8 leading-relaxed"
            >
              Custom Shopify stores and e-commerce solutions that convert visitors into customers 
              and scale with your business growth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-white text-green-600 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 group">
                <span>Start Your Store</span>
                <ShoppingCart className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200">
                View Our Work
              </button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Shopify Success by the Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our track record of building successful Shopify stores that drive real business results
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <AnimatedSection key={stat.label} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center group bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                  >
                    <Icon className="h-12 w-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                      className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2"
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Shopify Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Shopify solutions from store setup to advanced customizations
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.01 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full"
                  >
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mr-6`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
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

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Shopify?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful e-commerce features that help your business grow and scale
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <AnimatedSection key={feature.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="text-center group bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                    <div className="text-green-600 font-semibold">{feature.stats}</div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Shopify Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures your Shopify store launches successfully
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {process.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.step} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full"
                  >
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-2xl flex items-center justify-center mx-auto text-2xl font-bold shadow-lg">
                        {item.step}
                      </div>
                      <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                    <div className="space-y-2">
                      {item.activities.map((activity) => (
                        <div key={activity} className="flex items-center space-x-2 text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0" />
                          <span>{activity}</span>
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

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Shopify Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our Shopify development projects across different industries
            </p>
          </AnimatedSection>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <AnimatedSection key={study.title} delay={index * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className={`bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex flex-col lg:flex`}
                >
                  <div className="lg:w-1/2">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="mb-4">
                      <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                        {study.category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{study.title}</h3>
                    <p className="text-xl text-green-600 font-semibold mb-4">{study.client}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600 mb-4">{study.challenge}</p>
                      
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600 mb-6">{study.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Results:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {study.results.map((result) => (
                          <div key={result} className="flex items-center space-x-2">
                            <Star className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-white text-green-600 px-3 py-1 rounded-full text-sm font-medium border border-green-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 to-blue-900/95" />
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Launch Your Shopify Store?
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Let's build a Shopify store that not only looks amazing but also converts visitors 
              into customers and scales with your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 group">
                <span>Start Your Shopify Project</span>
                <ShoppingCart className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200">
                Get Free Consultation
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Shopify;