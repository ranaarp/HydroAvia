/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hydro': {
          'black': '#000000',
          'dark': '#0a0a0a',
          'darker': '#050505',
          'gray': '#171717',
          'light-gray': '#262626',
          'border': '#2a2a2a',
          'blue': '#0099d8',        // Brand blue from logo
          'green': '#8dc63f',       // Brand green from logo
          'blue-dark': '#0077a8',   // Darker blue
          'green-light': '#a8d96e', // Lighter green
          'accent': '#60a5fa',      // Light blue accent
          'muted': '#6b7280',       // Muted gray
        }
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { 
            textShadow: '0 0 10px #00d9ff, 0 0 20px #00d9ff, 0 0 30px #00d9ff'
          },
          'to': { 
            textShadow: '0 0 20px #00d9ff, 0 0 30px #00d9ff, 0 0 40px #00d9ff, 0 0 50px #00d9ff'
          }
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)',
        'radial-gradient': 'radial-gradient(circle at center, rgba(0,217,255,0.1) 0%, transparent 70%)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      }
    },
  },
  plugins: [],
}
