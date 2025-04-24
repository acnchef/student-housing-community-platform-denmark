import React from "react";
import { StyleSheet, View, Text, Image, ViewStyle } from "react-native";
import { colors } from "@/constants/colors";
import { typography } from "@/constants/typography";
import { layout } from "@/constants/layout";

type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

interface AvatarProps {
  source?: string;
  name?: string;
  size?: AvatarSize;
  style?: ViewStyle;
  showBadge?: boolean;
  badgeColor?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  source,
  name,
  size = "md",
  style,
  showBadge = false,
  badgeColor = colors.success,
}) => {
  const getInitials = (name: string) => {
    if (!name) return "";
    const parts = name.split(" ");
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  };

  const getSizeStyles = (): ViewStyle => {
    switch (size) {
      case "xs":
        return {
          width: 24,
          height: 24,
        };
      case "sm":
        return {
          width: 32,
          height: 32,
        };
      case "md":
        return {
          width: 40,
          height: 40,
        };
      case "lg":
        return {
          width: 48,
          height: 48,
        };
      case "xl":
        return {
          width: 64,
          height: 64,
        };
      default:
        return {
          width: 40,
          height: 40,
        };
    }
  };

  const getFontSize = (): number => {
    switch (size) {
      case "xs":
        return typography.fontSize.xs;
      case "sm":
        return typography.fontSize.sm;
      case "md":
        return typography.fontSize.md;
      case "lg":
        return typography.fontSize.lg;
      case "xl":
        return typography.fontSize.xl;
      default:
        return typography.fontSize.md;
    }
  };

  const getBadgeSize = (): number => {
    switch (size) {
      case "xs":
        return 8;
      case "sm":
        return 10;
      case "md":
        return 12;
      case "lg":
        return 14;
      case "xl":
        return 16;
      default:
        return 12;
    }
  };

  const sizeStyles = getSizeStyles();
  const fontSize = getFontSize();
  const badgeSize = getBadgeSize();

  return (
    <View style={[styles.container, style]}>
      {source ? (
        <Image
          source={{ uri: source }}
          style={[styles.image, sizeStyles]}
        />
      ) : (
        <View style={[styles.placeholder, sizeStyles]}>
          {name && (
            <Text style={[styles.initials, { fontSize }]}>
              {getInitials(name)}
            </Text>
          )}
        </View>
      )}
      {showBadge && (
        <View
          style={[
            styles.badge,
            {
              width: badgeSize,
              height: badgeSize,
              backgroundColor: badgeColor,
              right: size === "xs" ? -2 : -3,
              bottom: size === "xs" ? -2 : -3,
            },
          ]}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  image: {
    borderRadius: 9999,
  },
  placeholder: {
    borderRadius: 9999,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  initials: {
    color: "#FFFFFF",
    fontFamily: typography.fontFamily.medium,
  },
  badge: {
    position: "absolute",
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: colors.background,
  },
});