import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { colors } from "@/constants/colors";
import { layout } from "@/constants/layout";

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: keyof typeof layout.spacing | number;
  elevation?: number;
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  padding = "md",
  elevation = 1,
}) => {
  const paddingValue = typeof padding === "string" ? layout.spacing[padding] : padding;

  return (
    <View
      style={[
        styles.card,
        {
          padding: paddingValue,
          shadowOpacity: 0.1 * elevation,
          elevation: elevation,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: layout.borderRadius.md,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
});