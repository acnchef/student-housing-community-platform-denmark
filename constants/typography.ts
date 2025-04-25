import { Platform } from "react-native";

export const typography = {
  fontFamily: {
    regular: Platform.OS === "ios" ? "System" : "Roboto",
    medium: Platform.OS === "ios" ? "System-Medium" : "Roboto-Medium",
    semibold: Platform.OS === "ios" ? "System-Semibold" : "Roboto-Medium",
    bold: Platform.OS === "ios" ? "System-Bold" : "Roboto-Bold",
  },
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },
  lineHeight: {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 28,
    xl: 32,
    xxl: 36,
    xxxl: 40,
  },
  fontWeight: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
};