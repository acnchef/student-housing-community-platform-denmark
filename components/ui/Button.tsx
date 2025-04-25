import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors, gradients } from "@/constants/colors";
import { typography } from "@/constants/typography";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  icon,
  iconPosition = "left",
  fullWidth = false,
  style,
  textStyle,
}) => {
  const getButtonStyles = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      ...styles.button,
      ...styles[`button${size.charAt(0).toUpperCase() + size.slice(1)}` as keyof typeof styles],
      ...(fullWidth && styles.fullWidth),
    };

    if (disabled) {
      return {
        ...baseStyle,
        opacity: 0.6,
        backgroundColor: colors.textSecondary,
      };
    }

    switch (variant) {
      case "primary":
        return baseStyle;
      case "secondary":
        return {
          ...baseStyle,
          backgroundColor: colors.secondary,
        };
      case "outline":
        return {
          ...baseStyle,
          backgroundColor: "transparent",
          borderWidth: 2,
          borderColor: colors.primary,
        };
      case "ghost":
        return {
          ...baseStyle,
          backgroundColor: "transparent",
        };
      default:
        return baseStyle;
    }
  };

  const getTextStyles = (): TextStyle => {
    const baseStyle: TextStyle = {
      ...styles.text,
      ...styles[`text${size.charAt(0).toUpperCase() + size.slice(1)}` as keyof typeof styles],
      fontWeight: '600',
    };

    switch (variant) {
      case "primary":
        return {
          ...baseStyle,
          color: colors.background,
        };
      case "secondary":
        return {
          ...baseStyle,
          color: colors.primary,
        };
      case "outline":
      case "ghost":
        return {
          ...baseStyle,
          color: colors.primary,
        };
      default:
        return baseStyle;
    }
  };

  const getGradientColors = () => {
    if (disabled) {
      return [colors.textSecondary, colors.textSecondary];
    }
    switch (variant) {
      case "primary":
        return gradients.primary;
      case "secondary":
        return gradients.secondary;
      default:
        return gradients.primary;
    }
  };

  const renderContent = () => {
    if (loading) {
      return (
        <ActivityIndicator
          size="small"
          color={variant === "primary" || variant === "secondary" ? "#FFFFFF" : colors.primary}
        />
      );
    }

    const textStyles = [getTextStyles(), textStyle];

    if (!icon) {
      return <Text style={textStyles}>{title}</Text>;
    }

    return (
      <View style={styles.contentContainer}>
        {iconPosition === "left" && <View style={styles.iconLeft}>{icon}</View>}
        <Text style={textStyles}>{title}</Text>
        {iconPosition === "right" && <View style={styles.iconRight}>{icon}</View>}
      </View>
    );
  };

  const buttonStyles = [getButtonStyles(), style];

  if (variant === "primary" || variant === "secondary") {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled || loading}
        style={styles.touchable}
        activeOpacity={0.8}
      >
        <LinearGradient
          colors={getGradientColors() as readonly [string, string]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[buttonStyles, styles.gradientButton]}
        >
          {renderContent()}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[styles.touchable, buttonStyles]}
      activeOpacity={0.8}
    >
      {renderContent()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    alignSelf: "flex-start",
  },
  button: {
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  gradientButton: {
    overflow: 'hidden',
  },
  buttonSm: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    minWidth: 80,
  },
  buttonMd: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    minWidth: 120,
  },
  buttonLg: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    minWidth: 160,
  },
  fullWidth: {
    alignSelf: "stretch",
    width: "100%",
  },
  text: {
    fontFamily: typography.fontFamily.medium,
    textAlign: "center",
  },
  textSm: {
    fontSize: typography.fontSize.sm,
  },
  textMd: {
    fontSize: typography.fontSize.md,
  },
  textLg: {
    fontSize: typography.fontSize.lg,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
});