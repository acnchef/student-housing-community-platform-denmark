import React from "react";
import { StyleSheet, Text, View, ViewStyle, TextStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors, gradients } from "@/constants/colors";
import { typography } from "@/constants/typography";
import { layout } from "@/constants/layout";

type BadgeVariant = "primary" | "secondary" | "success" | "error" | "warning" | "info" | "feature";
type BadgeSize = "sm" | "md" | "lg";

interface BadgeProps {
  text: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  style?: ViewStyle;
  textStyle?: TextStyle;
  useGradient?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  variant = "primary",
  size = "md",
  style,
  textStyle,
  useGradient = false,
}) => {
  const getBadgeStyles = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      ...styles.badge,
      ...styles[`badge${size.charAt(0).toUpperCase() + size.slice(1)}` as keyof typeof styles],
    };

    if (!useGradient) {
      switch (variant) {
        case "primary":
          return {
            ...baseStyle,
            backgroundColor: colors.primary,
          };
        case "secondary":
          return {
            ...baseStyle,
            backgroundColor: colors.secondary,
          };
        case "success":
          return {
            ...baseStyle,
            backgroundColor: colors.success,
          };
        case "error":
          return {
            ...baseStyle,
            backgroundColor: colors.error,
          };
        case "warning":
          return {
            ...baseStyle,
            backgroundColor: colors.warning,
          };
        case "info":
          return {
            ...baseStyle,
            backgroundColor: colors.info,
          };
        case "feature":
          return {
            ...baseStyle,
            backgroundColor: colors.accent1,
          };
        default:
          return baseStyle;
      }
    }
    return baseStyle;
  };

  const getGradientColors = (): string[] => {
    switch (variant) {
      case "primary":
        return gradients.primary;
      case "secondary":
        return gradients.secondary;
      case "feature":
        return gradients.feature;
      default:
        return gradients.primary;
    }
  };

  const getTextStyles = (): TextStyle => {
    const baseStyle = {
      ...styles.text,
      ...styles[`text${size.charAt(0).toUpperCase() + size.slice(1)}` as keyof typeof styles],
    };

    // Adjust text color based on variant
    switch (variant) {
      case "secondary":
      case "feature":
        return {
          ...baseStyle,
          color: colors.primary,
        };
      default:
        return {
          ...baseStyle,
          color: colors.background,
        };
    }
  };

  if (useGradient) {
    return (
      <LinearGradient
        colors={getGradientColors()}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[getBadgeStyles(), style]}
      >
        <Text style={[getTextStyles(), textStyle]}>{text}</Text>
      </LinearGradient>
    );
  }

  return (
    <View style={[getBadgeStyles(), style]}>
      <Text style={[getTextStyles(), textStyle]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    borderRadius: layout.borderRadius.full,
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  badgeSm: {
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
  badgeMd: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  badgeLg: {
    paddingVertical: 7,
    paddingHorizontal: 14,
  },
  text: {
    fontFamily: typography.fontFamily.semibold,
    textAlign: "center",
  },
  textSm: {
    fontSize: typography.fontSize.xs,
  },
  textMd: {
    fontSize: typography.fontSize.sm,
  },
  textLg: {
    fontSize: typography.fontSize.md,
  },
});