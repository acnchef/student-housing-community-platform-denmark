/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mint': 'var(--mint)',
        'soft-yellow': 'var(--soft-yellow)',
        'accent-yellow': 'var(--accent-yellow)',
        'primary-start': 'var(--primary-start)',
        'primary-end': 'var(--primary-end)',
        'dawn': 'var(--dawn)',
        'midnight': 'var(--midnight)',
        'bright-blue': 'var(--bright-blue)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, var(--primary-start), var(--primary-end))',
        'gradient-background': 'linear-gradient(135deg, var(--mint) 0%, var(--soft-yellow) 100%)',
      },
      gradientColorStops: {
        'primary-start': '#124B91',  // Midnight Blue
        'primary-end': '#99F0FA',    // Bright Blue
        'secondary-start': '#F4F5AC', // Soft Yellow
        'secondary-end': '#FFFFFF',   // Pure White
        'accent-start': '#99F0FA',    // Bright Blue
        'accent-end': '#124B91',      // Midnight Blue
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 12px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
