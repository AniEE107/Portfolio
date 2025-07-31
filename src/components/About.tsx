import React from 'react';
import { Award, Target, Users, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Problem Solver',
      description: 'Identifying complex business challenges and creating innovative AI solutions that drive measurable results.',
    },
    {
      icon: Zap,
      title: 'Innovation Focus',
      description: 'Staying at the forefront of AI/ML technologies to build cutting-edge applications and models.',
    },
    {
      icon: Award,
      title: 'Quality Driven',
      description: 'Committed to delivering production-ready, scalable solutions with rigorous testing and optimization.',
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Working effectively with cross-functional teams to translate business needs into technical solutions.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming data into actionable insights and intelligent solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Building the Future with AI
            </h3>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                As an AI/ML Engineer, I specialize in developing sophisticated machine learning models 
                and data science solutions that address complex real-world challenges. My expertise 
                spans the entire ML pipeline, from data preprocessing and feature engineering to 
                model deployment and monitoring.
              </p>
              <p>
                I'm passionate about leveraging cutting-edge technologies like deep learning, 
                natural language processing, and computer vision to create intelligent systems 
                that make a meaningful impact. My approach combines technical excellence with 
                business acumen to deliver solutions that not only work but scale.
              </p>
              <p>
                With a strong foundation in both theoretical concepts and practical implementation, 
                I bridge the gap between research and production, ensuring that innovative ideas 
                become robust, deployable solutions.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-3 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg w-fit mb-4">
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;