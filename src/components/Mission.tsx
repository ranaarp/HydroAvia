import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const capabilities = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: 'Long Duration Flight',
    description: '20x longer flight times with hydrogen fuel cells compared to traditional battery systems.',
    stat: '20X',
    color: 'cyan'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: 'Computer Vision',
    description: 'Advanced AI-powered vision systems for real-time environment understanding and navigation.',
    stat: 'AI',
    color: 'blue'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Zero Emissions',
    description: 'Clean hydrogen fuel technology with zero carbon footprint for environmentally conscious operations.',
    stat: '0%',
    color: 'accent'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'GPS-Free Operations',
    description: 'Autonomous navigation in GPS-denied environments using visual-inertial odometry and SLAM.',
    stat: '100%',
    color: 'cyan'
  }
];

export default function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="mission" ref={ref} className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-hydro-black via-hydro-gray to-hydro-darker"></div>
      <div className="absolute inset-0 grid-bg opacity-5"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-hydro-blue/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-hydro-blue/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1 border border-hydro-blue/30 rounded-full mb-6">
            <span className="text-hydro-blue text-xs font-body tracking-widest">
              OUR MISSION
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-bold mb-6">
            <span className="text-white">TRANSFORMING</span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-hydro-blue via-hydro-blue to-hydro-green bg-clip-text clip-text">
              DEFENSE CAPABILITIES
            </span>
          </h2>

          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            HydroAvia is pioneering the next generation of autonomous drone technology. 
            Our GPS-denied autonomy stack enables operations in the most challenging environments, 
            powered by clean hydrogen fuel cells for unprecedented endurance.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass p-6 rounded-lg border border-transparent hover:border-hydro-blue/30 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-lg bg-hydro-${capability.color}/10 border border-hydro-${capability.color}/30 flex items-center justify-center mb-4 text-hydro-${capability.color} group-hover:scale-110 transition-transform`}>
                {capability.icon}
              </div>

              <div className={`text-4xl font-display font-bold text-hydro-${capability.color} mb-3`}>
                {capability.stat}
              </div>

              <h3 className="text-white font-display text-lg font-semibold mb-2">
                {capability.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass p-8 sm:p-12 rounded-lg"
        >
          <h3 className="font-display text-3xl font-bold text-center mb-12">
            <span className="text-white">MISSION </span>
            <span className="text-hydro-blue">APPLICATIONS</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Forest Inventory', desc: 'Automated forest cover and inventory management' },
              { title: 'Defense Operations', desc: 'GPS-denied tactical reconnaissance missions' },
              { title: 'Infrastructure Inspection', desc: 'Long-range asset monitoring and inspection' },
              { title: 'Search & Rescue', desc: 'Extended duration search operations' },
              { title: 'Environmental Monitoring', desc: 'Continuous ecological surveillance' },
              { title: 'Disaster Response', desc: 'Emergency assessment and coordination' }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-2 h-2 rounded-full bg-hydro-blue mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-white font-display font-semibold mb-1">
                    {useCase.title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {useCase.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-hydro-blue to-hydro-blue text-white font-display font-bold text-lg rounded-lg hover:scale-105 transition-transform"
          >
            PARTNER WITH US →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
