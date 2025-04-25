import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors, gradients } from "@/constants/colors";
import { layout } from "@/constants/layout";

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: keyof typeof layout.spacing | number;
  elevation?: number;
  variant?: 'default' | 'gradient';
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  padding = "md",
  elevation = 1,
  variant = 'default',
}) => {
  const paddingValue = typeof padding === "string" ? layout.spacing[padding] : padding;

  const cardStyle = [
    styles.card,
    {
      padding: paddingValue,
      shadowOpacity: 0.1 * elevation,
      elevation: elevation,
    },
    style,
  ];

  if (variant === 'gradient') {
    return (
      <LinearGradient
        colors={gradients.card}
        style={cardStyle}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {children}
      </LinearGradient>
    );
  }

  return <View style={cardStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: layout.borderRadius.md,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
});