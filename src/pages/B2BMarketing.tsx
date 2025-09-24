import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/common/AnimatedSection';
import { Target, Users, TrendingUp, Zap, ChevronRight, BarChart3, MessageSquare, Globe, Shield, Award, Lightbulb } from 'lucide-react';

const B2BMarketing: React.FC = () => {
  const strategies = [
    {
      icon: Target,
      title: 'Account-Based Marketing (ABM)',
      description: 'Highly personalized campaigns targeting high-value prospects with precision messaging and multi-touch engagement strategies.',
      features: [
        'Strategic account identification and research',
        'Personalized content and messaging',
        'Multi-channel orchestrated outreach',
        'Account-specific landing pages',
        'Advanced account scoring and prioritization',
        'Sales and marketing alignment'
      ],
      results: '400% increase in qualified opportunities'
    },
    {
      icon: Users,
      title: 'Lead Generation & Nurturing',
      description: 'Systematic approach to identifying, attracting, and nurturing qualified leads through sophisticated funnel strategies.',
      features: [
        'Advanced lead scoring and qualification',
        'Multi-stage nurture campaigns',
        'Progressive profiling and segmentation',
        'Behavioral trigger automation',
        'Lead routing and distribution',
        'Sales-ready lead handoff processes'
      ],
      results: '350% improvement in lead quality'
    },
    {
      icon: TrendingUp,
      title: 'Growth Marketing & Optimization',
      description: 'Data-driven strategies focused on sustainable, scalable business growth through continuous testing and optimization.',
      features: [
        'Conversion funnel optimization',
        'A/B testing and experimentation',
        'Customer lifecycle marketing',
        'Retention and expansion campaigns',
        'Performance analytics and insights',
        'Growth hacking methodologies'
      ],
      results: '250% boost in customer lifetime value'
    },
    {
      icon: Zap,
      title: 'Marketing Automation & CRM',
      description: 'Streamlined workflows and intelligent automation that nurture leads and optimize your entire sales process.',
      features: [
        'Advanced workflow automation',
        'CRM integration and optimization',
        'Lead scoring and routing',
        'Email marketing automation',
        'Social media automation',
        'Performance tracking and reporting'
      ],
      results: '300% increase in sales productivity'
    }
  ];

  const stats = [
    { value: '400%', label: 'Average lead increase', icon: TrendingUp },
    { value: '60%', label: 'Reduction in CAC', icon: Target },
    { value: '250%', label: 'ROI improvement', icon: BarChart3 },
    { value: '85%', label: 'Client retention rate', icon: Award }
  ];

  const caseStudies = [
    {
      id: 'tech-saas',
      title: 'SaaS Platform Growth',
      client: 'TechFlow Solutions',
      industry: 'Technology',
      challenge: 'Low-quality leads and long sales cycles',
      solution: 'Implemented ABM strategy with content marketing and lead nurturing',
      results: [
        '400% increase in qualified leads',
        '60% reduction in customer acquisition cost',
        '250% improvement in sales cycle speed',
        '300% growth in monthly recurring revenue'
      ],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 'manufacturing',
      title: 'Industrial Equipment Marketing',
      client: 'Precision Manufacturing Co.',
      industry: 'Manufacturing',
      challenge: 'Difficulty reaching decision-makers in target accounts',
      solution: 'Multi-channel ABM approach with LinkedIn and email campaigns',
      results: [
        '500% increase in C-level engagement',
        '200% growth in pipeline value',
        '150% improvement in close rates',
        '180% boost in average deal size'
      ],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 'financial-services',
      title: 'FinTech Lead Generation',
      client: 'InnovateFin Solutions',
      industry: 'Financial Services',
      challenge: 'Complex regulatory environment and trust barriers',
      solution: 'Content-driven thought leadership and compliance-focused campaigns',
      results: [
        '350% increase in qualified prospects',
        '200% improvement in conversion rates',
        '300% growth in webinar attendance',
        '250% boost in content engagement'
      ],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  const services = [
    {
      title: 'Strategic Consulting',
      description: 'Comprehensive B2B marketing strategy development and optimization',
      icon: Lightbulb,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Content Marketing',
      description: 'Thought leadership content that educates and converts B2B buyers',
      icon: MessageSquare,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Digital Advertising',
      description: 'Targeted B2B advertising across LinkedIn, Google, and industry platforms',
      icon: Globe,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Sales Enablement',
      description: 'Tools and content that empower your sales team to close more deals',
      icon: Shield,
      color: 'from-orange-500 to-red-500'
    }
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
              B2B Marketing
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                That Drives Results
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed"
            >
              Transform your B2B marketing with data-driven strategies that generate qualified leads, 
              accelerate sales cycles, and drive sustainable business growth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 group">
                <span>Start Your Growth Journey</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200">
                View Case Studies
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
              Proven B2B Marketing Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our B2B marketing strategies deliver measurable impact for businesses across industries
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <AnimatedSection key={stat.label} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center group bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                  >
                    <Icon className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                      className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
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

      {/* Strategies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our B2B Marketing Strategies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to drive growth and maximize ROI in the B2B space
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {strategies.map((strategy, index) => {
              const Icon = strategy.icon;
              return (
                <AnimatedSection key={strategy.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full"
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-6">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{strategy.title}</h3>
                        <p className="text-blue-600 font-semibold">{strategy.results}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{strategy.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {strategy.features.map((feature) => (
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

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive B2B Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Full-service B2B marketing solutions to accelerate your business growth
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="text-center group"
                  >
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${service.color} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              B2B Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our B2B marketing campaigns across different industries
            </p>
          </AnimatedSection>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <AnimatedSection key={study.id} delay={index * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className={`bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex flex-col lg:flex`}
                >
                  <div className="lg:w-1/2">
                    <img
                      src={study.image}
                      alt={study.client}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{study.title}</h3>
                    <p className="text-xl text-blue-600 font-semibold mb-4">{study.client}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600 mb-4">{study.challenge}</p>
                      
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600 mb-6">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Results:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {study.results.map((result) => (
                          <div key={result} className="flex items-center space-x-2">
                            <ChevronRight className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{result}</span>
                          </div>
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

      {/* GTM Strategy Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-purple-900/95" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Go-To-Market Strategy Excellence
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Launch your B2B product or service with confidence using our proven GTM framework 
                that ensures market success from day one.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Comprehensive market analysis and competitive intelligence',
                  'Target audience identification and persona development',
                  'Value proposition refinement and messaging framework',
                  'Multi-channel launch strategy and execution',
                  'Sales enablement and team training programs',
                  'Performance tracking and optimization protocols'
                ].map((item) => (
                  <div key={item} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-blue-100">{item}</span>
                  </div>
                ))}
              </div>
              <button className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 flex items-center space-x-2 group">
                <span>Plan Your Launch Strategy</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6 text-center">GTM Success Metrics</h3>
                  <div className="space-y-6">
                    {[
                      { label: 'Market Penetration', value: '85%', color: 'bg-cyan-400' },
                      { label: 'Lead Generation', value: '92%', color: 'bg-blue-400' },
                      { label: 'Sales Conversion', value: '78%', color: 'bg-purple-400' },
                      { label: 'Customer Acquisition', value: '88%', color: 'bg-pink-400' }
                    ].map((metric) => (
                      <div key={metric.label}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-blue-100">{metric.label}</span>
                          <span className="text-white font-semibold">{metric.value}</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: metric.value }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className={`${metric.color} h-2 rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Accelerate Your B2B Growth?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let's create a B2B marketing strategy that generates qualified leads, 
              shortens sales cycles, and drives sustainable revenue growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 group">
                <span>Get Free B2B Strategy Audit</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200">
                Schedule Consultation
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default B2BMarketing;