import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import DroneViewer from './DroneViewer';

const technologies = [
  {
    id: 'vision',
    title: 'Stereo Vision System',
    description: 'Dual front-facing cameras provide depth perception for obstacle avoidance and navigation in GPS-denied environments.',
    specs: ['40mm baseline', 'Real-time depth mapping', 'AI-powered object detection'],
    color: 'cyan'
  },
  {
    id: 'autonomy',
    title: 'GPS-Denied Autonomy',
    description: 'Our cutting-edge autonomy stack enables operation in complex environments without satellite positioning.',
    specs: ['Visual-inertial odometry', 'SLAM navigation', 'Terrain-relative navigation'],
    color: 'blue'
  },
  {
    id: 'hydrogen',
    title: 'Hydrogen Fuel Cells',
    description: '20x flight duration compared to conventional battery systems with zero emissions.',
    specs: ['Zero pollution', 'Extended range', 'Rapid refueling'],
    color: 'accent'
  },
  {
    id: 'safety',
    title: 'Safety Systems',
    description: 'Full propeller guards and redundant safety features ensure reliable operation.',
    specs: ['Prop guards', 'LED indicators', 'Emergency landing'],
    color: 'cyan'
  }
];

export default function Technology() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedTech, setSelectedTech] = useState(0);
  const [blueprintMode, setBlueprintMode] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const getColorClass = (color: string) => {
    switch (color) {
      case 'cyan': return 'text-hydro-blue border-hydro-blue';
      case 'blue': return 'text-hydro-blue border-hydro-blue';
      case 'accent': return 'text-hydro-green border-hydro-green';
      default: return 'text-hydro-blue border-hydro-blue';
    }
  };

  return (
    <section id="tech" ref={ref} className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-hydro-black via-hydro-darker to-hydro-black"></div>
      <div className="absolute inset-0 grid-bg opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <div className="px-4 py-1 border border-hydro-blue/30 rounded-full">
              <span className="text-hydro-blue text-xs font-body tracking-widest">
                CUTTING EDGE TECHNOLOGY
              </span>
            </div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-display text-4xl sm:text-6xl font-bold mb-6"
          >
            <span className="text-white">ADVANCED</span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-hydro-blue to-hydro-green bg-clip-text clip-text">
              CAPABILITIES
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Our 14" drone platform integrates multiple breakthrough technologies
            for unprecedented performance in challenging environments.
          </motion.p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Viewer */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-square glass rounded-lg overflow-hidden relative">
              <DroneViewer blueprintMode={blueprintMode} showParticles={!blueprintMode} />
            </div>

            {/* Mode toggle */}
            <div className="absolute top-4 right-4 z-20 flex gap-2">
              <button
                onClick={() => setBlueprintMode(true)}
                className={`px-4 py-2 rounded text-sm font-body transition-all ${
                  blueprintMode
                    ? 'bg-hydro-blue text-hydro-black'
                    : 'bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                BLUEPRINT
              </button>
              <button
                onClick={() => setBlueprintMode(false)}
                className={`px-4 py-2 rounded text-sm font-body transition-all ${
                  !blueprintMode
                    ? 'bg-hydro-blue text-hydro-black'
                    : 'bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                3D MODEL
              </button>
            </div>

            {/* Frame specs */}
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="glass p-4 rounded text-center">
                <div className="text-2xl font-display text-hydro-blue mb-1">14"</div>
                <div className="text-xs text-gray-400">DIAGONAL</div>
              </div>
              <div className="glass p-4 rounded text-center">
                <div className="text-2xl font-display text-hydro-blue mb-1">355mm</div>
                <div className="text-xs text-gray-400">MOTOR-TO-MOTOR</div>
              </div>
              <div className="glass p-4 rounded text-center">
                <div className="text-2xl font-display text-hydro-green mb-1">4</div>
                <div className="text-xs text-gray-400">MOTORS</div>
              </div>
            </div>
          </motion.div>

          {/* Technology cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                onClick={() => setSelectedTech(index)}
                className={`glass p-6 rounded-lg cursor-pointer transition-all duration-300 border-2 ${
                  selectedTech === index
                    ? `${getColorClass(tech.color)} border-opacity-100 scale-105`
                    : 'border-transparent hover:border-white/20'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`font-display text-xl font-bold ${
                    selectedTech === index ? getColorClass(tech.color) : 'text-white'
                  }`}>
                    {tech.title}
                  </h3>
                  <span className="text-2xl">{index === selectedTech ? '▼' : '▶'}</span>
                </div>

                <p className="text-gray-400 text-sm mb-4">{tech.description}</p>

                {selectedTech === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2 border-t border-white/10 pt-4"
                  >
                    {tech.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          getColorClass(tech.color).split(' ')[0].replace('text-', 'bg-')
                        }`}></div>
                        <span className="text-sm text-gray-300">{spec}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Technical specifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 glass p-8 rounded-lg"
        >
          <h3 className="font-display text-2xl font-bold text-hydro-blue mb-6 text-center">
            TECHNICAL SPECIFICATIONS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-sm text-gray-400 mb-2">Frame Size</div>
              <div className="font-body text-white">14" / 355mm</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-2">Camera Baseline</div>
              <div className="font-body text-white">40mm Stereo</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-2">LED Mounts</div>
              <div className="font-body text-white">4x Positions</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-2">Safety</div>
              <div className="font-body text-white">Full Prop Guards</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
