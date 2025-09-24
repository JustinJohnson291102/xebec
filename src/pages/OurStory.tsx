import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/common/AnimatedSection';
import { Award, Users, TrendingUp, Heart } from 'lucide-react';

const OurStory: React.FC = () => {
  const timeline = [
    {
      year: '2018',
      title: 'The Beginning',
      description: 'Founded with a vision to transform digital experiences for forward-thinking brands.',
      icon: '🚀'
    },
    {
      year: '2019',
      title: 'First Major Success',
      description: 'Helped Rajmal Lakhichand Jewellers achieve 300% growth in online sales.',
      icon: '💎'
    },
    {
      year: '2020',
      title: 'Expanding Horizons',
      description: 'Grew our team and expanded services to include performance marketing and analytics.',
      icon: '📈'
    },
    {
      year: '2021',
      title: 'Innovation Focus',
      description: 'Launched Xtrack, our proprietary analytics platform for better insights.',
      icon: '🔬'
    },
    {
      year: '2022',
      title: 'Global Reach',
      description: 'Expanded internationally and partnered with leading brands worldwide.',
      icon: '🌍'
    },
    {
      year: '2023',
      title: 'Industry Recognition',
      description: 'Received multiple awards for excellence in digital marketing and innovation.',
      icon: '🏆'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We pour our hearts into every project, treating your success as our own.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work as an extension of your team, fostering open communication and partnership.'
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'We\'re committed to continuous learning and staying ahead of industry trends.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We never settle for good enough - excellence is our standard, not our goal.'
    }
  ];

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              From a small team with big dreams to a leading digital agency transforming brands worldwide
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                We exist to empower businesses with exceptional digital experiences that drive 
                meaningful connections, foster growth, and create lasting impact in an increasingly 
                digital world.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every brand has a unique story to tell. Our role is to amplify that story through 
                innovative digital strategies, compelling creative work, and data-driven insights 
                that deliver measurable results.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Our team at work"
                  className="rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm">Success Stories</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestones that shaped us into the agency we are today
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <AnimatedSection key={item.year} delay={index * 0.1}>
                  <div className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}>
                    <div className={`w-1/2 ${
                      index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'
                    }`}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <div className="text-2xl mb-2">{item.icon}</div>
                        <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </motion.div>
                    </div>

                    {/* Timeline Node */}
                    <div className="relative z-10">
                      <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg" />
                    </div>

                    <div className="w-1/2" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <AnimatedSection key={value.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="text-center group"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Building Digital Legacies
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Every brand we work with becomes part of our legacy. We don't just create campaigns - 
              we build lasting digital foundations that continue to drive success long after launch.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
              <blockquote className="text-2xl font-medium mb-4">
                "Xebec Digital transformed our entire online presence. The results speak for themselves - 
                300% growth in just 18 months."
              </blockquote>
              <cite className="text-blue-200">— Rajmal Lakhichand Jewellers</cite>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default OurStory;