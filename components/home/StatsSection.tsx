
import React from 'react';

const StatsSection: React.FC = () => {
  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y divide-gray-100 md:divide-y-0 md:divide-x md:divide-gray-100">
          <div className="px-4">
            <div className="text-4xl md:text-5xl font-black text-primary mb-2">10k+</div>
            <div className="text-gray-600 font-medium uppercase tracking-wide text-sm">Families Protected</div>
          </div>
          <div className="px-4 pt-8 md:pt-0">
            <div className="text-4xl md:text-5xl font-black text-primary mb-2">30+</div>
            <div className="text-gray-600 font-medium uppercase tracking-wide text-sm">Top-Rated Carriers</div>
          </div>
          <div className="px-4 pt-8 md:pt-0">
            <div className="text-4xl md:text-5xl font-black text-primary mb-2">50</div>
            <div className="text-gray-600 font-medium uppercase tracking-wide text-sm">States Covered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
