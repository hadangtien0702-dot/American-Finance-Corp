
import React from 'react';
import { Phone, Mail, Clock, HelpCircle, CheckCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { siteConfig } from '../data/config';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white flex-grow">
      {/* Header Section */}
      <div className="bg-primary py-16 md:py-20 relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 tracking-tight">Contact Us</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed font-light">
            Ready to secure your future or join our elite team? We are here to answer your questions and guide you to success.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          
          <ContactForm />

          {/* Contact Information Section */}
          <div className="flex flex-col justify-start space-y-6 md:space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Whether you are looking for insurance coverage or interested in a career opportunity, our team is ready to assist you.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-5 hover:border-primary/30 transition-colors group">
              <div className="bg-blue-50 p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-gray-900 mb-1 text-lg">Phone</h3>
                <p className="text-gray-500 mb-2 text-sm">Mon-Fri from 9am to 5pm.</p>
                <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-primary font-bold text-lg md:text-xl hover:underline block truncate">
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-5 hover:border-primary/30 transition-colors group">
              <div className="bg-blue-50 p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-gray-900 mb-1 text-lg">Email</h3>
                <p className="text-gray-500 mb-2 text-sm">Our friendly team is here to help.</p>
                <a href={`mailto:${siteConfig.contact.email}`} className="text-primary font-bold text-base md:text-lg hover:underline break-all">
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-5 hover:border-primary/30 transition-colors group">
              <div className="bg-blue-50 p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1 text-lg">Business Hours</h3>
                <p className="text-gray-500 text-sm">Monday - Friday</p>
                <p className="text-gray-800 font-bold">{siteConfig.contact.hours}</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border border-blue-100">
               <div className="flex items-center gap-2 mb-2">
                 <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                 <h3 className="font-bold text-gray-900">Serving Nationwide</h3>
               </div>
               <p className="text-gray-600 text-sm">
                 We are licensed and actively serving families and agents across the United States. Contact us to find a representative near you.
               </p>
            </div>
          </div>

        </div>

        {/* FAQ Section */}
        <div className="border-t border-gray-200 pt-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
                <p className="text-gray-500 mt-4">Common questions about our services and careers.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <div className="flex gap-4">
                        <HelpCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-gray-900 text-lg mb-2">How do I become an agent?</h4>
                            <p className="text-gray-600 leading-relaxed">Simply fill out the form above selecting "Agent Recruitment" as the subject. One of our hiring managers will reach out to discuss the licensing process and training.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <div className="flex gap-4">
                        <HelpCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-gray-900 text-lg mb-2">Do you offer training for new agents?</h4>
                            <p className="text-gray-600 leading-relaxed">Yes! We provide a comprehensive training program including online courses, mentorship from top producers, and weekly sales training calls.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <div className="flex gap-4">
                        <HelpCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-gray-900 text-lg mb-2">What insurance carriers do you work with?</h4>
                            <p className="text-gray-600 leading-relaxed">We partner with over 30+ top-rated carriers including Mutual of Omaha, Transamerica, Foresters Financial, and many others to offer the best products.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <div className="flex gap-4">
                        <HelpCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-gray-900 text-lg mb-2">Is this a commission-based position?</h4>
                            <p className="text-gray-600 leading-relaxed">Yes, our agents enjoy one of the highest commission structures in the industry with vested renewals from day one, allowing for unlimited earning potential.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
