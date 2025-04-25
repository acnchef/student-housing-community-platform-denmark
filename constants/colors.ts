export const colors = {
  // Primary Colors
  primary: "#124B91", // Midnight Blue - Main brand color
  secondary: "#99F0FA", // Bright Blue - Secondary actions
  
  // Background Colors
  background: "#FFFFFF", // Pure White - Main background
  card: "#F4F5AC", // Soft Yellow - Card backgrounds
  
  // Text Colors
  text: "#10101A", // Dawn Black - Primary text
  textSecondary: "#124B91", // Midnight Blue - Secondary text
  
  // UI Elements
  border: "#99F0FA", // Bright Blue - Borders
  success: "#99F0FA", // Bright Blue variant for success states
  error: "#F4F5AC", // Soft Yellow variant for error states
  warning: "#F4F5AC", // Soft Yellow variant for warnings
  info: "#124B91", // Midnight Blue variant for info
  
  // Utility Colors
  overlay: "rgba(16, 16, 26, 0.5)", // Dawn Black with opacity
  shadow: "rgba(16, 16, 26, 0.05)", // Dawn Black with low opacity
  
  // Status Colors
  verified: "#99F0FA", // Bright Blue for verified status
  unverified: "#10101A", // Dawn Black for unverified
  pending: "#F4F5AC", // Soft Yellow for pending
};

export const gradients = {
  primary: ["#124B91", "#99F0FA"], // Midnight Blue to Bright Blue
  secondary: ["#F4F5AC", "#FFFFFF"], // Soft Yellow to Pure White
  card: ["#FFFFFF", "#F4F5AC"], // Pure White to Soft Yellow
  accent: ["#99F0FA", "#124B91"], // Bright Blue to Midnight Blue
};

// Semantic color mapping for dark mode support
export const darkModeColors = {
  ...colors,
  background: "#10101A", // Dawn Black
  card: "#124B91", // Midnight Blue
  text: "#FFFFFF", // Pure White
  textSecondary: "#99F0FA", // Bright Blue
  border: "#124B91", // Midnight Blue
  shadow: "rgba(0, 0, 0, 0.2)",
};