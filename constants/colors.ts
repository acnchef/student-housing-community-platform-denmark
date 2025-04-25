export const colors = {
  // Primary Colors
  primary: "#124B91", // Midnight Blue - Main brand color
  secondary: "#99F0FA", // Bright Blue - Secondary actions
  
  // Background Colors
  background: "#FFFFFF", // Pure White - Main background
  card: "#F8F9FA", // Light Gray - Card backgrounds (replacing yellow)
  cardAlt: "#EDF2F7", // Alternative card background for variety
  
  // Text Colors
  text: "#10101A", // Dawn Black - Primary text
  textSecondary: "#4A5568", // Slate Gray - Secondary text (more neutral)
  
  // UI Elements
  border: "#E2E8F0", // Subtle border color
  success: "#99F0FA", // Bright Blue variant for success states
  error: "#FF8A80", // Soft Red for errors (replacing yellow)
  warning: "#FFB74D", // Soft Orange for warnings (replacing yellow)
  info: "#124B91", // Midnight Blue variant for info
  
  // Utility Colors
  overlay: "rgba(16, 16, 26, 0.5)", // Dawn Black with opacity
  shadow: "rgba(16, 16, 26, 0.05)", // Dawn Black with low opacity
  
  // Status Colors
  verified: "#99F0FA", // Bright Blue for verified status
  unverified: "#10101A", // Dawn Black for unverified
  pending: "#FFB74D", // Soft Orange for pending (replacing yellow)
  
  // Accent Colors
  accent1: "#F4F5AC", // Soft Yellow - Now used sparingly as accent
  accent2: "#E6F7FF", // Very Light Blue - Subtle accent
};

export const gradients = {
  primary: ["#124B91", "#99F0FA"], // Midnight Blue to Bright Blue (keeping this)
  secondary: ["#F8F9FA", "#EDF2F7"], // Subtle gray gradient for cards
  card: ["#FFFFFF", "#F8F9FA"], // Very subtle white to light gray
  accent: ["#99F0FA", "#124B91"], // Bright Blue to Midnight Blue (keeping this)
  highlight: ["#FFFFFF", "#E6F7FF"], // White to Very Light Blue for highlights
  feature: ["#F8F9FA", "#E6F7FF"], // Light Gray to Very Light Blue for featured items
};

// Semantic color mapping for dark mode support
export const darkModeColors = {
  ...colors,
  background: "#10101A", // Dawn Black
  card: "#1A202C", // Dark Gray (replacing Midnight Blue)
  cardAlt: "#2D3748", // Slightly lighter dark gray
  text: "#FFFFFF", // Pure White
  textSecondary: "#A0AEC0", // Light Gray (more neutral)
  border: "#2D3748", // Dark Gray
  shadow: "rgba(0, 0, 0, 0.2)",
};