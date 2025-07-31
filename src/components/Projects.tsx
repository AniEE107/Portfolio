import React from 'react';
import { ExternalLink, Github, Brain, BarChart3, Eye, MessageSquare } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'FinPulse',
      category: 'Machine Learning',
      description: 'Built using Streamlit, LangChain, Ollama (Mistral), and yFinance, FinPulse helps investors make more informed decisions by turning complex data into actionable insights.',
      technologies: ['Streamlit' , 'yFinance' , 'Tweepy' , 'LangChain' , 'LangGraph', 'Ollama + Mistral' , 'Python'],
      icon: Brain,
      color: 'from-blue-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      github: 'https://github.com/AniEE107/FinPulse',
      live: 'https://stockanalysisbymanishkumar.streamlit.app/'
    },
    {
      title: 'Cold Mail Generator – AI-Powered Outreach Assistant',
      category: 'Deep Learning',
      description: 'Cold Mail Generator is a Streamlit-based application that uses LLMs to generate personalized cold emails for various professional use cases, such as job outreach, networking, product pitches, or B2B sales — with minimal user input.',
      technologies: ['Streamlit' , 'LangChain' , 'Ollama + LLM' , 'Python-dotenv' ],
      icon: BarChart3,
      color: 'from-teal-500 to-teal-600',
      image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      github: 'https://github.com/AniEE107/Cold-Mail-Generator',
      live: null
    },
    {
      title: 'MobilityPulse – Ride & Cancellation Analytics Dashboard',
      category: 'Data Analytics',
      description: 'MobilityPulse is an interactive Power BI dashboard that provides deep insights into ride-sharing operations, cancellations, revenue, and user behavior. The goal is to help mobility companies monitor performance, identify operational bottlenecks, and improve the rider experience.',
      technologies: ['Power BI', 'Power Query' , 'DAX' , 'Excel/CSV'],
      icon: Eye,
      color: 'from-orange-500 to-orange-600',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      github: 'https://github.com/AniEE107/MobilityPulse',
      live: null
    },
    {
      title: 'Amazon Sales Analytics Dashboard',
      category: 'Data Analytics',
      description: 'An interactive, data-driven dashboard that visualizes and analyzes Amazon product sales performance, revenue trends, and customer behavior metrics across time, category, and geography.',
      technologies: ['Power BI', 'Power Query' , 'DAX' , 'Excel/CSV'],
      icon: MessageSquare,
      color: 'from-purple-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      github: 'https://github.com/AniEE107/Amazon-Sales-Analytics-Dashboard',
      live: null
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world applications of AI/ML solving complex business challenges
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className={`absolute top-4 left-4 p-3 rounded-xl bg-gradient-to-r ${project.color}`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700">
                  {project.category}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center px-4 py-2 bg-gradient-to-r ${project.color} text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-200`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-400 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;