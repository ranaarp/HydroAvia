import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] top-[10%] left-[10%] rounded-full bg-hydro-blue/15 blur-[80px] animate-float"></div>
        <div className="absolute w-[400px] h-[400px] top-[50%] right-[10%] rounded-full bg-hydro-green/15 blur-[80px] animate-float" style={{ animationDelay: '-7s' }}></div>
        <div className="absolute w-[350px] h-[350px] bottom-[10%] left-[30%] rounded-full bg-hydro-blue/15 blur-[80px] animate-float" style={{ animationDelay: '-14s' }}></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30 z-0"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block mb-6"
        >
          <div className="px-6 py-2 border border-hydro-blue/30 rounded-full backdrop-blur-sm">
            <span className="text-hydro-blue text-sm font-body tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-hydro-green rounded-full animate-pulse"></span>
              GPS-DENIED AUTONOMY PLATFORM
            </span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="block text-white">Autonomous Systems</span>
          <span className="block mt-2 text-transparent bg-gradient-to-r from-hydro-blue to-hydro-green bg-clip-text clip-text">
            for Critical Operations
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl sm:text-2xl text-gray-400 font-body max-w-3xl mx-auto mb-12 leading-relaxed font-light"
        >
          HydroAvia delivers enterprise-grade autonomous drone systems with{' '}
          <span className="text-hydro-blue font-medium">GPS-denied navigation</span>,{' '}
          <span className="text-hydro-green font-medium">hydrogen propulsion</span>, and{' '}
          <span className="text-white font-medium">AI-powered perception</span> for defense and industrial applications.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12"
        >
          <div className="glass p-6 rounded-lg border border-hydro-blue/10 hover:border-hydro-blue/30 transition-all hover:scale-105">
            <div className="text-4xl font-display font-bold text-white mb-2">20×</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider mb-3">Extended Flight Duration</div>
            <div className="w-full h-1 bg-gradient-to-r from-hydro-blue to-hydro-green rounded-full"></div>
          </div>
          <div className="glass p-6 rounded-lg border border-hydro-green/10 hover:border-hydro-green/30 transition-all hover:scale-105">
            <div className="text-4xl font-display font-bold text-white mb-2">100%</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider mb-3">GPS-Independent</div>
            <div className="w-full h-1 bg-gradient-to-r from-hydro-blue to-hydro-green rounded-full"></div>
          </div>
          <div className="glass p-6 rounded-lg border border-hydro-blue/10 hover:border-hydro-blue/30 transition-all hover:scale-105">
            <div className="text-4xl font-display font-bold text-white mb-2">Zero</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider mb-3">Carbon Emissions</div>
            <div className="w-full h-1 bg-gradient-to-r from-hydro-blue to-hydro-green rounded-full"></div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-hydro-blue text-white font-display font-semibold text-lg rounded-lg transition-all duration-300 hover:bg-hydro-blue-dark hover:scale-105"
          >
            Request Information
          </a>
          
          <a
            href="#tech"
            className="px-8 py-4 border-2 border-hydro-blue/30 text-white font-display font-semibold text-lg rounded-lg transition-all duration-300 hover:border-hydro-blue hover:bg-hydro-blue/10 hover:scale-105"
          >
            View Technology
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-hydro-blue/50 hover:text-hydro-blue transition-colors cursor-pointer">
            <span className="text-xs font-body tracking-widest">SCROLL</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-hydro-blue to-transparent animate-pulse"></div>
          </div>
        </motion.div>
      </div>

      {/* Corner HUD elements */}
      <div className="absolute top-4 left-4 w-32 h-32 border-l-2 border-t-2 border-hydro-blue/20 pointer-events-none"></div>
      <div className="absolute top-4 right-4 w-32 h-32 border-r-2 border-t-2 border-hydro-green/20 pointer-events-none"></div>
      <div className="absolute bottom-4 left-4 w-32 h-32 border-l-2 border-b-2 border-hydro-green/20 pointer-events-none"></div>
      <div className="absolute bottom-4 right-4 w-32 h-32 border-r-2 border-b-2 border-hydro-blue/20 pointer-events-none"></div>
    </section>
  );
}
