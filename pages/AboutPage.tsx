
import React from 'react';
import { Shield, Target, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="bg-gray-50 py-12 md:py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">About American Finance Corp</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in financial protection and professional growth. We are dedicated to securing futures and building legacies.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center mb-16 md:mb-20">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              American Finance Corp is a premier financial services agency serving families and businesses across the nation. We specialize in providing comprehensive insurance solutions, including Life Insurance, Annuities, and Executive Bonus Plans.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Beyond our products, we are a thriving community of agents. We believe in empowering individuals to take control of their careers through our industry-leading training, mentorship, and aggressive compensation models. We don't just sell insurance; we build leaders.
            </p>
          </div>
          <div className="order-1 md:order-2 bg-blue-50 rounded-2xl p-4 flex items-center justify-center rotate-0 md:rotate-1 hover:rotate-0 transition-transform duration-300">
             <img 
               src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
               alt="Team meeting" 
               className="rounded-xl shadow-lg w-full object-cover h-64 md:h-80" 
             />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 md:mb-20">
          <div className="bg-primary text-white p-8 md:p-10 rounded-2xl shadow-xl transform hover:-translate-y-1 transition-transform">
             <Target className="w-12 h-12 mb-6 text-blue-200" />
             <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
             <p className="text-blue-50 text-lg leading-relaxed">
               To provide peace of mind to millions of families through superior financial products while empowering a new generation of insurance professionals with the training, tools, and mentorship needed to achieve financial independence.
             </p>
          </div>
          <div className="bg-gray-900 text-white p-8 md:p-10 rounded-2xl shadow-xl transform hover:-translate-y-1 transition-transform">
             <TrendingUp className="w-12 h-12 mb-6 text-blue-400" />
             <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
             <p className="text-gray-300 text-lg leading-relaxed">
               To become the most trusted name in family financial protection and the premier destination for ambitious agents seeking to build their own business empires within the financial sector.
             </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-16 md:mb-20">
           <h2 className="text-3xl font-bold text-gray-900 mb-8 md:mb-12">Our Core Values</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="p-8 border border-gray-100 rounded-xl hover:shadow-xl transition-all bg-white group">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Shield className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Integrity</h4>
                <p className="text-gray-600">We operate with unyielding honesty and transparency in every interaction with clients and agents.</p>
              </div>
              <div className="p-8 border border-gray-100 rounded-xl hover:shadow-xl transition-all bg-white group">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Users className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Service</h4>
                <p className="text-gray-600">Our commitment to serving our communities is the foundation of our success.</p>
              </div>
              <div className="p-8 border border-gray-100 rounded-xl hover:shadow-xl transition-all bg-white group">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Excellence</h4>
                <p className="text-gray-600">We strive for the highest standards in product quality, agent training, and customer support.</p>
              </div>
           </div>
        </div>

        {/* Why Choose Us Section (New) */}
        <div className="mb-16 md:mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The American Finance Corp Difference</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                    <h3 className="text-2xl font-bold text-primary mb-6 border-b border-gray-200 pb-3">For Our Clients</h3>
                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                          <span><strong>Personalized Strategies:</strong> We don't believe in one-size-fits-all. Your financial plan is custom-built for your specific needs and goals.</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                          <span><strong>Independent Choice:</strong> We represent over 30 top-rated carriers, ensuring you get the best rates and products without bias.</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                          <span><strong>Lifetime Support:</strong> We are here for the long haul, helping you adjust your protection as your life evolves.</span>
                        </li>
                    </ul>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                    <h3 className="text-2xl font-bold text-primary mb-6 border-b border-gray-200 pb-3">For Our Agents</h3>
                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                          <span><strong>Highest Comp:</strong> We offer one of the most aggressive compensation structures in the industry, rewarding your hard work directly.</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                          <span><strong>True Ownership:</strong> Build a business that you truly own. We offer vested renewals from day one, securing your legacy.</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                          <span><strong>World-Class Training:</strong> Access our proprietary training platform to master the art of sales, marketing, and leadership.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* CTA Section (New) */}
        <div className="bg-primary rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">Ready to Secure Your Future?</h2>
              <p className="text-lg md:text-xl text-blue-100 mb-8 md:mb-10 max-w-2xl mx-auto">
                Whether you need protection for your family or are looking for a lucrative career change, we are here to guide you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="/contact" className="inline-flex items-center justify-center bg-white text-primary font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-lg w-full sm:w-auto">
                    Contact Us Today
                  </a>
              </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
