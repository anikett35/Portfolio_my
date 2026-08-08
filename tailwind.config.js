module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // Electric Blue
          hover: '#60A5FA'
        },
        secondary: '#22D3EE', // Cyan
        accent: '#F59E0B',    // Amber
        background: '#05070D', // Deep Space Navy
        surface: '#0A0E1A',   // Lighter Navy for cards
        text: {
          DEFAULT: '#F8FAFC', // Crisp White
          secondary: '#9CA3B8' // Lighter muted gray for 4.5:1 contrast
        },
        card: 'rgba(255, 255, 255, 0.05)', // Slightly lighter for contrast
        border: 'rgba(255, 255, 255, 0.12)' // More visible border
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'], // Using Inter for both to maintain premium feel
      },
      boxShadow: {
        glow: '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-cyan': '0 0 20px rgba(34, 211, 238, 0.5)',
        glass: '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      }
    },
  },
  plugins: [],
}
