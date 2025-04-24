import React from "react";
import { StyleSheet, Text, View, ViewStyle, TextStyle } from "react-native";
import { colors } from "@/constants/colors";
import { typography } from "@/constants/typography";
import { layout } from "@/constants/layout";

type BadgeVariant = "primary" | "secondary" | "success" | "error" | "warning" | "info";
type BadgeSize = "sm" | "md" | "lg";

interface BadgeProps {
  text: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  variant = "primary",
  size = "md",
  style,
  textStyle,
}) => {
  const getBadgeStyles = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      ...styles.badge,
      ...styles[`badge${size.charAt(0).toUpperCase() + size.slice(1)}` as keyof typeof styles],
    };

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
      default:
        return baseStyle;
    }
  };

  const getTextStyles = (): TextStyle => {
    return {
      ...styles.text,
      ...styles[`text${size.charAt(0).toUpperCase() + size.slice(1)}` as keyof typeof styles],
    };
  };

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
  },
  badgeSm: {
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  badgeMd: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  badgeLg: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  text: {
    color: "#FFFFFF",
    fontFamily: typography.fontFamily.medium,
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