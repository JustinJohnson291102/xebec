import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/common/AnimatedSection';
import { Award, Users, TrendingUp, Heart, Target, Lightbulb, Shield, Rocket } from 'lucide-react';

const OurStory: React.FC = () => {
  const timeline = [
    {
      year: '2018',
      title: 'The Beginning',
      description: 'Founded with a vision to transform digital experiences for forward-thinking brands across India and beyond.',
      icon: '🚀',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      year: '2019',
      title: 'First Major Success',
      description: 'Helped Rajmal Lakhichand Jewellers achieve 300% growth in online sales, establishing our reputation in luxury retail.',
      icon: '💎',
      image: 'https://images.pexels.com/photos/1927402/pexels-photo-1927402.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      year: '2020',
      title: 'Digital Transformation Era',
      description: 'Expanded services during the pandemic, helping businesses pivot to digital-first strategies with remarkable success.',
      icon: '📈',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      year: '2021',
      title: 'Innovation Focus',
      description: 'Launched Xtrack, our proprietary analytics platform, revolutionizing how brands understand their digital performance.',
      icon: '🔬',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Extended our reach internationally, partnering with leading brands across multiple continents and industries.',
      icon: '🌍',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      year: '2023',
      title: 'Industry Leadership',
      description: 'Recognized as a leading digital agency with multiple awards for innovation, creativity, and exceptional client results.',
      icon: '🏆',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion-Driven Excellence',
      description: 'We pour our hearts into every project, treating your success as our own and never settling for mediocrity.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Collaborative Partnership',
      description: 'We work as an extension of your team, fostering transparent communication and genuine partnerships.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Innovation',
      description: 'We\'re committed to staying ahead of trends, continuously learning and evolving with the digital landscape.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      title: 'Uncompromising Quality',
      description: 'Excellence isn\'t our goal—it\'s our standard. We deliver nothing less than exceptional results.',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Visionary leader with 15+ years in digital marketing and brand strategy.'
    },
    {
      name: 'Priya Sharma',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Award-winning designer specializing in brand identity and digital experiences.'
    },
    {
      name: 'Amit Patel',
      role: 'Head of Technology',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Tech innovator leading our development and analytics initiatives.'
    },
    {
      name: 'Sneha Gupta',
      role: 'Strategy Director',
      image: 'https://images.pexels.com/photos/3756688/pexels-photo-3756688.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Strategic mastermind behind our most successful marketing campaigns.'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Brands Transformed', icon: Target },
    { number: '1000+', label: 'Campaigns Launched', icon: Rocket },
    { number: '98%', label: 'Client Retention', icon: Heart },
    { number: '15+', label: 'Industry Awards', icon: Award }
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
              Our Story of
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed"
            >
              From a small team with big dreams to India's leading digital agency, 
              transforming brands and creating digital legacies that inspire and endure.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Our Mission
                  </h2>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    To empower businesses with exceptional digital experiences that create 
                    meaningful connections, drive sustainable growth, and build lasting brand 
                    loyalty in an increasingly digital world.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We believe every brand has a unique story to tell. Our role is to amplify 
                    that story through innovative strategies, compelling creative work, and 
                    data-driven insights that deliver measurable, transformative results.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To be the most trusted digital partner for ambitious brands, setting new 
                    standards for creativity, innovation, and results in the digital marketing industry.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="relative"
                >
                  <img
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Our team collaborating"
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
                    <div className="text-3xl font-bold">6+</div>
                    <div className="text-sm opacity-90">Years of Excellence</div>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Achievements
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client success
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <AnimatedSection key={achievement.label} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
                  >
                    <Icon className="h-12 w-12 text-white mx-auto mb-4" />
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                      className="text-4xl md:text-5xl font-bold text-white mb-2"
                    >
                      {achievement.number}
                    </motion.div>
                    <div className="text-blue-100 font-medium">{achievement.label}</div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Journey Through Time
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that shaped us into the industry-leading agency we are today
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-600" />

            <div className="space-y-16">
              {timeline.map((item, index) => (
                <AnimatedSection key={item.year} delay={index * 0.2}>
                  <div className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}>
                    <div className={`w-1/2 ${
                      index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'
                    }`}>
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                      >
                        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-2xl mb-6 mx-auto">
                          {item.icon}
                        </div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                          {item.year}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">{item.description}</p>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 object-cover rounded-xl"
                        />
                      </motion.div>
                    </div>

                    {/* Timeline Node */}
                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg"
                      />
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The fundamental principles that guide every decision, every project, and every relationship
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <AnimatedSection key={value.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    <div className="relative p-8">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${value.color} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visionary leaders driving innovation and excellence in digital marketing
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                >
                  <div className="relative mb-6">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:border-blue-200 transition-all duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Lightbulb className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-purple-900/95" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Building Digital Legacies That Last
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Every brand we partner with becomes part of our legacy. We don't just create campaigns—
              we build lasting digital foundations that continue to drive success, inspire audiences, 
              and create meaningful impact long after launch.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { title: 'Digital Transformation', desc: 'Complete brand evolution' },
                { title: 'Sustainable Growth', desc: 'Long-term success strategies' },
                { title: 'Innovation Leadership', desc: 'Pioneering new approaches' }
              ].map((item, index) => (
                <AnimatedSection key={item.title} delay={index * 0.1}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-blue-200">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20"
            >
              <blockquote className="text-2xl md:text-3xl font-medium mb-6 leading-relaxed">
                "Xebec Digital didn't just transform our online presence—they revolutionized 
                our entire approach to customer engagement. The results speak for themselves: 
                300% growth in just 18 months."
              </blockquote>
              <cite className="text-blue-200 text-lg">— Rajmal Lakhichand Jewellers</cite>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default OurStory;