import React from 'react';
import { Brain, Database, Code, BarChart3, Cpu, Cloud } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: 'Machine Learning',
      color: 'from-blue-500 to-blue-600',
      skills: [
        'Supervised & Unsupervised Learning',
        'Deep Learning & Neural Networks',
        'Natural Language Processing',
        'Computer Vision',
        'Reinforcement Learning',
        
      ]
    },
    {
      icon: Database,
      title: 'Data Science',
      color: 'from-teal-500 to-teal-600',
      skills: [
        'Statistical Analysis',
        'Data Mining & ETL',
        'Feature Engineering',
        'Exploratory Data Analysis',
       
      ]
    },
    {
      icon: Code,
      title: 'Programming',
      color: 'from-orange-500 to-orange-600',
      skills: [
        'Python & R',
        'TensorFlow & PyTorch',
        'scikit-learn & pandas',
        'SQL & NoSQL',
        'Git & Docker',
       
      ]
    },
    {
      icon: BarChart3,
      title: 'Visualization',
      color: 'from-purple-500 to-purple-600',
      skills: [
        'Matplotlib & Seaborn',
        'Plotly & Dash',
        'Tableau & Power BI',
       
        'Jupyter Notebooks',
        'Interactive Dashboards'
      ]
    },
    {
      icon: Cpu,
      title: 'AI Frameworks',
      color: 'from-green-500 to-green-600',
      skills: [
        'TensorFlow & Keras',
        'PyTorch & FastAI',
       
        'OpenCV',
        
       
      ]
    },
    
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive skills across the entire AI/ML and data science ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${category.color} mb-6`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {category.title}
              </h3>
              
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center text-gray-700"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mr-3 flex-shrink-0`}></div>
                    <span className="text-sm font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;