import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/services/ServiceCard';
import Modal from '../components/common/Modal';
import AnimatedSection from '../components/common/AnimatedSection';
import { Service } from '../types';
import { Check, Star, ArrowRight, Zap, Target, TrendingUp, Users, Smartphone, Search, BarChart3, MessageSquare, Globe } from 'lucide-react';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services = [
    {
      id: 'digital-marketing',
      title: 'Digital Marketing Strategy',
      description: 'Comprehensive digital strategies that drive growth, engagement, and maximize ROI across all digital channels.',
      icon: '🚀',
      features: [
        'Strategic Planning & Consultation',
        'Multi-Channel Campaign Management',
        'Performance Analytics & Reporting',
        'Conversion Rate Optimization',
        'Customer Journey Mapping',
        'Competitive Analysis & Insights',
        'Brand Positioning Strategy',
        'Digital Transformation Consulting'
      ],
      benefits: [
        '300% average increase in qualified leads',
        '150% improvement in conversion rates',
        '200% boost in brand awareness',
        '85% client retention rate'
      ],
      process: [
        'Discovery & Audit',
        'Strategy Development',
        'Implementation & Launch',
        'Monitor & Optimize'
      ]
    },
    {
      id: 'seo-sem',
      title: 'SEO & SEM Excellence',
      description: 'Advanced search engine optimization and marketing strategies to dominate search results and drive qualified traffic.',
      icon: '🔍',
      features: [
        'Technical SEO Optimization',
        'Keyword Research & Strategy',
        'Content Optimization',
        'Link Building Campaigns',
        'Google Ads Management',
        'Local SEO Services',
        'E-commerce SEO',
        'SEO Audits & Reporting'
      ],
      benefits: [
        '400% increase in organic traffic',
        '250% improvement in search rankings',
        '180% boost in click-through rates',
        '90% reduction in cost per acquisition'
      ],
      process: [
        'SEO Audit & Analysis',
        'Strategy & Planning',
        'Implementation',
        'Monitoring & Reporting'
      ]
    },
    {
      id: 'social-media',
      title: 'Social Media Marketing',
      description: 'Engaging social media strategies that build communities, drive engagement, and convert followers into customers.',
      icon: '📱',
      features: [
        'Social Media Strategy',
        'Content Creation & Curation',
        'Community Management',
        'Social Media Advertising',
        'Influencer Partnerships',
        'Social Commerce Setup',
        'Crisis Management',
        'Performance Analytics'
      ],
      benefits: [
        '500% growth in social engagement',
        '300% increase in follower quality',
        '200% improvement in social ROI',
        '150% boost in brand mentions'
      ],
      process: [
        'Social Audit',
        'Strategy Development',
        'Content Creation',
        'Engagement & Growth'
      ]
    },
    {
      id: 'content-marketing',
      title: 'Content Marketing',
      description: 'Strategic content creation that educates, engages, and converts your audience while building brand authority.',
      icon: '✍️',
      features: [
        'Content Strategy Development',
        'Blog Writing & Management',
        'Video Content Production',
        'Infographic Design',
        'Email Marketing Campaigns',
        'Podcast Production',
        'Content Distribution',
        'Performance Measurement'
      ],
      benefits: [
        '350% increase in website traffic',
        '250% improvement in lead quality',
        '200% boost in time on site',
        '180% growth in email subscribers'
      ],
      process: [
        'Content Audit',
        'Strategy Planning',
        'Content Creation',
        'Distribution & Promotion'
      ]
    },
    {
      id: 'ppc-advertising',
      title: 'PPC & Paid Advertising',
      description: 'Data-driven paid advertising campaigns that maximize ROI and drive immediate, measurable results.',
      icon: '💰',
      features: [
        'Google Ads Management',
        'Facebook & Instagram Ads',
        'LinkedIn Advertising',
        'YouTube Advertising',
        'Display Advertising',
        'Remarketing Campaigns',
        'Shopping Ads',
        'Conversion Tracking'
      ],
      benefits: [
        '400% improvement in ROAS',
        '60% reduction in cost per click',
        '250% increase in conversion rate',
        '300% growth in qualified leads'
      ],
      process: [
        'Account Setup & Audit',
        'Campaign Strategy',
        'Launch & Optimization',
        'Performance Analysis'
      ]
    },
    {
      id: 'email-marketing',
      title: 'Email Marketing',
      description: 'Personalized email campaigns that nurture leads, retain customers, and drive consistent revenue growth.',
      icon: '📧',
      features: [
        'Email Strategy Development',
        'List Building & Segmentation',
        'Automated Drip Campaigns',
        'Newsletter Design & Management',
        'A/B Testing & Optimization',
        'Personalization & Dynamic Content',
        'Deliverability Optimization',
        'Performance Analytics'
      ],
      benefits: [
        '450% increase in email ROI',
        '200% improvement in open rates',
        '300% boost in click-through rates',
        '180% growth in customer lifetime value'
      ],
      process: [
        'List Audit & Strategy',
        'Campaign Development',
        'Automation Setup',
        'Testing & Optimization'
      ]
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'Deep dive into your business, goals, target audience, and competitive landscape',
      icon: Search,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Creating a comprehensive digital strategy tailored to your unique needs and objectives',
      icon: Target,
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: '03',
      title: 'Implementation & Launch',
      description: 'Executing campaigns with precision, attention to detail, and best practices',
      icon: Zap,
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: '04',
      title: 'Optimization & Growth',
      description: 'Continuously monitoring, testing, and refining for maximum performance',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const industries = [
    { name: 'E-commerce & Retail', icon: '🛍️', projects: '150+' },
    { name: 'Healthcare & Wellness', icon: '🏥', projects: '80+' },
    { name: 'Technology & SaaS', icon: '💻', projects: '120+' },
    { name: 'Finance & Banking', icon: '🏦', projects: '60+' },
    { name: 'Education & Training', icon: '🎓', projects: '90+' },
    { name: 'Real Estate', icon: '🏠', projects: '70+' }
  ];

  const closeModal = () => setSelectedService(null);

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
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
              Digital Marketing
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Services That Deliver
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed"
            >
              Comprehensive digital solutions designed to elevate your brand, engage your audience, 
              and drive measurable growth across all digital channels.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 flex items-center space-x-2 group">
                <span>Explore Our Services</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200">
                Get Free Consultation
              </button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end digital marketing solutions tailored to your business goals
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedService(service)}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100 hover:border-blue-200 h-full"
                >
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="text-sm text-gray-500 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center space-x-2 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach that ensures exceptional results every time
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.step} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="text-center group relative"
                  >
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${item.color} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="h-10 w-10" />
                    </div>
                    <div className="text-6xl font-bold text-gray-200 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    
                    {/* Connection Line */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform translate-x-4" />
                    )}
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized expertise across diverse industries and business sectors
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <AnimatedSection key={industry.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-blue-600 font-semibold">{industry.projects} Projects</p>
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
            backgroundImage: 'url(https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-purple-900/95" />
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let's create a digital strategy that drives real results for your business. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 group">
                <span>Get Free Strategy Session</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200">
                View Our Portfolio
              </button>
            </div>
          </AnimatedSection>
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
              <p className="text-xl text-gray-600 leading-relaxed">{selectedService.description}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Check className="h-6 w-6 text-green-600 mr-2" />
                  What's Included
                </h3>
                <div className="space-y-3">
                  {selectedService.features.map((feature) => (
                    <div key={feature} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
                  Expected Results
                </h3>
                <div className="space-y-3">
                  {selectedService.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start space-x-3">
                      <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Zap className="h-5 w-5 text-blue-600 mr-2" />
                Our Process for {selectedService.title}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {selectedService.process.map((step, index) => (
                  <div key={step} className="text-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">
                      {index + 1}
                    </div>
                    <p className="text-sm text-gray-600">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 flex items-center space-x-2 mx-auto">
                <span>Get Started with {selectedService.title}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Services;