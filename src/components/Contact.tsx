import React from 'react';
import { Mail, Github, Linkedin, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'manish.kumar@email.com',
      href: 'mailto:manish.kumar@email.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/AniEE107',
      href: 'https://github.com/AniEE107',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/manish-kumar-8b323a258',
      href: 'https://www.linkedin.com/in/manish-kumar-8b323a258',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your next AI/ML project or explore collaboration opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Get In Touch
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                >
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg mr-4">
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {contact.label}
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-100">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Available for Opportunities
              </h4>
              <p className="text-gray-600 leading-relaxed">
                I'm currently open to new opportunities in AI/ML engineering, 
                data science consulting, and collaborative research projects. 
                Let's discuss how we can work together to solve complex challenges 
                with innovative solutions.
              </p>
            </div>
          </div>

          {/* Contact Form */}
        
        </div>
      </div>
    </section>
  );
};

export default Contact;