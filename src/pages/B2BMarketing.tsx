import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/common/AnimatedSection';
import { Target, Users, TrendingUp, Zap, ChevronRight } from 'lucide-react';
import { caseStudies } from '../data/constants';

const B2BMarketing: React.FC = () => {
  const strategies = [
    {
      icon: Target,
      title: 'Account-Based Marketing',
      description: 'Personalized campaigns targeting high-value prospects with precision messaging.',
      features: ['Prospect identification', 'Personalized content', 'Multi-channel outreach', 'Account scoring']
    },
    {
      icon: Users,
      title: 'Lead Generation',
      description: 'Systematic approach to identifying and nurturing qualified leads through the sales funnel.',
      features: ['Lead scoring', 'Nurture campaigns', 'Landing page optimization', 'Form optimization']
    },
    {
      icon: TrendingUp,
      title: 'Growth Marketing',
      description: 'Data-driven strategies focused on sustainable, scalable business growth.',
      features: ['Funnel optimization', 'Conversion tracking', 'A/B testing', 'Performance analytics']
    },
    {
      icon: Zap,
      title: 'Marketing Automation',
      description: 'Streamlined workflows that nurture leads and optimize your sales process.',
      features: ['Email automation', 'Lead nurturing', 'CRM integration', 'Workflow optimization']
    }
  ];

  const stats = [
    { value: '400%', label: 'Average lead increase' },
    { value: '60%', label: 'Reduction in CAC' },
    { value: '250%', label: 'ROI improvement' },
    { value: '85%', label: 'Client retention rate' }
  ];

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              B2B Marketing Excellence
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Drive qualified leads and accelerate growth with our proven B2B marketing strategies
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200">
              Start Your Growth Journey
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our B2B marketing strategies deliver measurable impact for businesses of all sizes
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center group">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-4xl md:text-5xl font-bold text-blue-600 mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Strategies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our B2B Marketing Strategies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to drive growth and maximize ROI
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strategies.map((strategy, index) => {
              const Icon = strategy.icon;
              return (
                <AnimatedSection key={strategy.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{strategy.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{strategy.description}</p>
                    <ul className="space-y-2">
                      {strategy.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our B2B marketing campaigns
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <AnimatedSection key={study.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={study.image}
                    alt={study.client}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                    <p className="text-blue-600 font-semibold mb-4">{study.client}</p>
                    <ul className="space-y-2">
                      {study.results.map((result) => (
                        <li key={result} className="flex items-center space-x-2 text-sm text-gray-600">
                          <ChevronRight className="h-4 w-4 text-green-600" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* GTM Strategy Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Go-To-Market Strategy
              </h2>
              <p className="text-xl text-blue-100 mb-6">
                Launch your product or service with confidence using our proven GTM framework.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Market analysis and positioning',
                  'Competitive research and differentiation',
                  'Channel strategy and optimization',
                  'Messaging and content framework',
                  'Launch timeline and execution'
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span className="text-blue-100">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3 rounded-full font-semibold transition-all duration-200">
                Plan Your Launch
              </button>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-100">Market Research</span>
                      <span className="text-white font-semibold">100%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-100">Strategy Development</span>
                      <span className="text-white font-semibold">85%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-100">Campaign Setup</span>
                      <span className="text-white font-semibold">60%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-100">Launch Preparation</span>
                      <span className="text-white font-semibold">40%</span>
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

export default B2BMarketing;