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
        opacity: 0.5,
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
          borderWidth: 1,
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
    };

    switch (variant) {
      case "primary":
      case "secondary":
        return {
          ...baseStyle,
          color: "#FFFFFF",
        };
      case "outline":
        return {
          ...baseStyle,
          color: colors.primary,
        };
      case "ghost":
        return {
          ...baseStyle,
          color: colors.primary,
        };
      default:
        return baseStyle;
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

  if (variant === "primary") {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled || loading}
        style={styles.touchable}
        activeOpacity={0.8}
      >
        <LinearGradient
          colors={[gradients.primary[0], gradients.primary[1]] as readonly [string, string]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={buttonStyles}
        >
          {renderContent()}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  if (variant === "secondary") {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled || loading}
        style={styles.touchable}
        activeOpacity={0.8}
      >
        <LinearGradient
          colors={[gradients.secondary[0], gradients.secondary[1]] as readonly [string, string]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={buttonStyles}
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
  },
  buttonSm: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonMd: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonLg: {
    paddingVertical: 16,
    paddingHorizontal: 32,
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