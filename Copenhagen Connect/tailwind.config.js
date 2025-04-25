/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#124B91",  // Primary brand color
        brightBlue: "#99F0FA", // Interactive elements
        softYellow: "#F4F5AC", // Cards and warnings
        white: "#FFFFFF",     // Backgrounds
        dawn: "#10101A",      // Text color
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
