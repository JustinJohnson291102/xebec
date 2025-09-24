import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/common/AnimatedSection';
import { Code, Smartphone, Search, Zap, Monitor, Tablet, Globe, Shield, Rocket, Award, CheckCircle, Star } from 'lucide-react';

const WebDevelopment: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Web Development',
      description: 'Bespoke websites and web applications built from the ground up to meet your unique business requirements and objectives.',
      features: [
        'React/Next.js Development',
        'Node.js Backend Solutions',
        'Database Design & Optimization',
        'Third-party API Integration',
        'Custom CMS Development',
        'Progressive Web Apps (PWA)',
        'Microservices Architecture',
        'Cloud Infrastructure Setup'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design & Mobile-First',
      description: 'Mobile-optimized websites that provide exceptional user experiences across all devices and screen sizes.',
      features: [
        'Mobile-First Design Approach',
        'Cross-Device Compatibility',
        'Touch-Optimized Interfaces',
        'Adaptive Image Loading',
        'Flexible Grid Systems',
        'Progressive Enhancement',
        'Device-Specific Optimization',
        'Comprehensive Testing Suite'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Search,
      title: 'SEO & Performance Optimization',
      description: 'Built-in SEO best practices and performance optimization to ensure your website ranks well and loads lightning-fast.',
      features: [
        'Technical SEO Implementation',
        'Core Web Vitals Optimization',
        'Schema Markup Integration',
        'Image & Asset Optimization',
        'CDN Configuration',
        'Caching Strategy Implementation',
        'Site Speed Optimization',
        'Search Console Setup'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'E-commerce Solutions',
      description: 'Powerful e-commerce platforms that drive sales with seamless user experiences and robust functionality.',
      features: [
        'Custom E-commerce Development',
        'Payment Gateway Integration',
        'Inventory Management Systems',
        'Order Processing Automation',
        'Customer Account Portals',
        'Multi-currency Support',
        'Advanced Analytics Integration',
        'Security & Compliance'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const technologies = [
    { 
      name: 'React & Next.js', 
      logo: '⚛️', 
      description: 'Modern JavaScript frameworks for building fast, interactive user interfaces',
      expertise: '95%'
    },
    { 
      name: 'Node.js & Express', 
      logo: '💚', 
      description: 'Scalable backend solutions and RESTful API development',
      expertise: '92%'
    },
    { 
      name: 'TypeScript', 
      logo: '📘', 
      description: 'Type-safe JavaScript for better code quality and maintainability',
      expertise: '90%'
    },
    { 
      name: 'MongoDB & PostgreSQL', 
      logo: '🍃', 
      description: 'Database solutions for modern web applications',
      expertise: '88%'
    },
    { 
      name: 'AWS & Cloud Services', 
      logo: '☁️', 
      description: 'Cloud infrastructure and deployment solutions',
      expertise: '85%'
    },
    { 
      name: 'Tailwind CSS', 
      logo: '🎨', 
      description: 'Utility-first CSS framework for rapid UI development',
      expertise: '93%'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Comprehensive analysis of your requirements, goals, and technical specifications',
      icon: Search,
      activities: [
        'Requirements gathering and analysis',
        'Technical architecture planning',
        'User experience research',
        'Project timeline development'
      ]
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Creating wireframes, mockups, and interactive prototypes for validation',
      icon: Monitor,
      activities: [
        'UI/UX design and wireframing',
        'Interactive prototype development',
        'Design system creation',
        'User testing and feedback'
      ]
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Building your website with clean code, best practices, and thorough testing',
      icon: Code,
      activities: [
        'Frontend and backend development',
        'Database design and implementation',
        'Quality assurance testing',
        'Performance optimization'
      ]
    },
    {
      step: '04',
      title: 'Launch & Optimization',
      description: 'Deploying your site and continuously optimizing for performance and results',
      icon: Rocket,
      activities: [
        'Production deployment',
        'Performance monitoring',
        'SEO optimization',
        'Ongoing maintenance and support'
      ]
    }
  ];

  const portfolioItems = [
    {
      title: 'E-commerce Platform',
      client: 'Fashion Retailer',
      category: 'E-commerce',
      description: 'Modern e-commerce platform with advanced filtering, wishlist, and checkout optimization',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      results: ['300% increase in conversions', '50% faster page load times', '200% mobile traffic growth'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      title: 'SaaS Dashboard',
      client: 'Analytics Company',
      category: 'Web Application',
      description: 'Complex data visualization dashboard with real-time analytics and reporting',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      results: ['400% improvement in user engagement', '60% reduction in load times', '150% increase in user retention'],
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS']
    },
    {
      title: 'Corporate Website',
      client: 'Professional Services',
      category: 'Corporate',
      description: 'Professional corporate website with content management and lead generation',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      results: ['250% increase in lead generation', '180% improvement in SEO rankings', '300% growth in organic traffic'],
      technologies: ['React', 'Headless CMS', 'Tailwind', 'Vercel']
    }
  ];

  const features = [
    { icon: Shield, title: 'Security First', description: 'Enterprise-grade security measures and best practices' },
    { icon: Zap, title: 'Lightning Fast', description: 'Optimized for speed with 95+ PageSpeed scores' },
    { icon: Globe, title: 'SEO Optimized', description: 'Built-in SEO best practices for better rankings' },
    { icon: Award, title: 'Award Winning', description: 'Recognized for design excellence and innovation' }
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <AnimatedSection>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Website Development
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                That Converts
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed"
            >
              Custom websites and web applications that combine stunning design with powerful functionality, 
              optimized for performance, SEO, and user experience.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 group">
                <span>Start Your Project</span>
                <Rocket className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200">
                View Our Portfolio
              </button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <AnimatedSection key={feature.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="text-center group"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Development Philosophy
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We believe great websites are born from the perfect marriage of beautiful design 
                and flawless functionality. Every element serves a purpose, every interaction 
                delights users, and every line of code is crafted with precision.
              </p>
              <div className="space-y-4">
                {[
                  'User-centered design approach that prioritizes experience',
                  'Accessibility and inclusion built into every project',
                  'Performance-optimized for lightning-fast load times',
                  'Scalable architecture that grows with your business',
                  'SEO-friendly structure for better search rankings',
                  'Mobile-first responsive design for all devices'
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-6 shadow-lg"
                  >
                    <Smartphone className="h-12 w-12 text-blue-600 mb-4" />
                    <h4 className="font-semibold text-gray-900 mb-2">Mobile First</h4>
                    <p className="text-sm text-gray-600">Optimized for mobile devices</p>
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-6 shadow-lg mt-8"
                  >
                    <Monitor className="h-12 w-12 text-green-600 mb-4" />
                    <h4 className="font-semibold text-gray-900 mb-2">Desktop Ready</h4>
                    <p className="text-sm text-gray-600">Beautiful on large screens</p>
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 shadow-lg -mt-4"
                  >
                    <Tablet className="h-12 w-12 text-purple-600 mb-4" />
                    <h4 className="font-semibold text-gray-900 mb-2">Tablet Perfect</h4>
                    <p className="text-sm text-gray-600">Seamless tablet experience</p>
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity }}
                    className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-6 shadow-lg"
                  >
                    <Zap className="h-12 w-12 text-orange-600 mb-4" />
                    <h4 className="font-semibold text-gray-900 mb-2">Lightning Fast</h4>
                    <p className="text-sm text-gray-600">Optimized performance</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive web development solutions for modern businesses
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
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
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

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Technologies We Master
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge tools and frameworks for building exceptional web experiences
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <AnimatedSection key={tech.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{tech.logo}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{tech.name}</h3>
                      <div className="flex items-center mt-1">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: tech.expertise }}
                            transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                          />
                        </div>
                        <span className="text-sm font-semibold text-gray-600">{tech.expertise}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{tech.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach that ensures successful project delivery every time
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
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl flex items-center justify-center mx-auto text-2xl font-bold shadow-lg">
                        {item.step}
                      </div>
                      <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                    <div className="space-y-2">
                      {item.activities.map((activity) => (
                        <div key={activity} className="flex items-center space-x-2 text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
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

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Recent Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing some of our latest web development projects and their impressive results
            </p>
          </AnimatedSection>

          <div className="space-y-16">
            {portfolioItems.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className={`bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex flex-col lg:flex`}
                >
                  <div className="lg:w-1/2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-xl text-blue-600 font-semibold mb-4">{item.client}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Results:</h4>
                      <div className="space-y-2">
                        {item.results.map((result) => (
                          <div key={result} className="flex items-center space-x-2">
                            <Star className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-medium border border-blue-200"
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

      {/* SEO Performance Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                SEO-Ready From Day One
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Every website we build comes with comprehensive SEO optimization 
                to help you rank higher in search results and attract more organic traffic.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: '🎯', title: 'Technical SEO', status: 'Fully Optimized', color: 'text-green-600' },
                  { icon: '⚡', title: 'Page Speed', status: '95+ Score', color: 'text-blue-600' },
                  { icon: '📱', title: 'Mobile-Friendly', status: 'Perfect Score', color: 'text-purple-600' },
                  { icon: '🔍', title: 'Schema Markup', status: 'Implemented', color: 'text-orange-600' },
                  { icon: '📊', title: 'Analytics Setup', status: 'Configured', color: 'text-teal-600' },
                  { icon: '🖼️', title: 'Image Optimization', status: 'Automated', color: 'text-pink-600' }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-sm"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-900">{item.title}</div>
                      <div className={`text-sm font-medium ${item.color}`}>{item.status}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    95+
                  </div>
                  <div className="text-gray-600 font-medium">Average PageSpeed Score</div>
                </div>
                <div className="space-y-6">
                  {[
                    { label: 'Performance', score: 95, color: 'from-green-500 to-emerald-500' },
                    { label: 'Accessibility', score: 98, color: 'from-blue-500 to-cyan-500' },
                    { label: 'Best Practices', score: 100, color: 'from-purple-500 to-pink-500' },
                    { label: 'SEO', score: 92, color: 'from-orange-500 to-red-500' }
                  ].map((metric, index) => (
                    <div key={metric.label}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600 font-medium">{metric.label}</span>
                        <span className="text-gray-900 font-bold">{metric.score}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${metric.score}%` }}
                          transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                          className={`bg-gradient-to-r ${metric.color} h-3 rounded-full shadow-sm`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-purple-900/95" />
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let's create a website that not only looks stunning but also drives real business results. 
              Get started with a free consultation and project estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 group">
                <span>Start Your Project</span>
                <Rocket className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200">
                Get Free Quote
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;