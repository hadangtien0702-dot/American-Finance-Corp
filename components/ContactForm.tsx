
import React from 'react';
import { Send, ChevronDown } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 relative order-2 lg:order-1">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
      <p className="text-gray-500 mb-6 text-sm">Fill out the form below and we'll get back to you within 24 hours.</p>
      
      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-1">First Name</label>
            <input type="text" id="firstName" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white" placeholder="John" />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-1">Last Name</label>
            <input type="text" id="lastName" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white" placeholder="Doe" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
              <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white" placeholder="john@example.com" />
          </div>
          <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
              <input type="tel" id="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white" placeholder="(555) 123-4567" />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1">Subject</label>
          <div className="relative">
              <select id="subject" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white appearance-none text-gray-700">
                  <option>General Inquiry</option>
                  <option>Agent Recruitment / Careers</option>
                  <option>Life Insurance Quote</option>
                  <option>Partnership Opportunities</option>
              </select>
              <ChevronDown className="absolute right-3 top-3.5 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
          <textarea id="message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white" placeholder="How can we help you today?"></textarea>
        </div>

        <button type="submit" className="w-full bg-primary text-white font-bold py-4 px-6 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 shadow-lg transform hover:-translate-y-0.5">
          <Send className="w-5 h-5" />
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
