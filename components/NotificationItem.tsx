import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import {
  MessageSquare,
  Home,
  CreditCard,
  Bell,
} from "lucide-react-native";
import { Notification } from "@/types";
import { colors } from "@/constants/colors";
import { typography } from "@/constants/typography";
import { layout } from "@/constants/layout";

interface NotificationItemProps {
  notification: Notification;
  onPress: (notification: Notification) => void;
}

export const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
  onPress,
}) => {
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60)
    );

    if (diffInMinutes < 1) {
      return "Just now";
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`;
    } else if (diffInMinutes < 1440) {
      const hours = Math.floor(diffInMinutes / 60);
      return `${hours}h ago`;
    } else {
      const days = Math.floor(diffInMinutes / 1440);
      return `${days}d ago`;
    }
  };

  const getIcon = () => {
    switch (notification.type) {
      case "message":
        return (
          <View style={[styles.iconContainer, { backgroundColor: colors.primary }]}>
            <MessageSquare size={16} color="#FFFFFF" />
          </View>
        );
      case "property":
        return (
          <View style={[styles.iconContainer, { backgroundColor: colors.secondary }]}>
            <Home size={16} color="#FFFFFF" />
          </View>
        );
      case "payment":
        return (
          <View style={[styles.iconContainer, { backgroundColor: colors.success }]}>
            <CreditCard size={16} color="#FFFFFF" />
          </View>
        );
      case "system":
        return (
          <View style={[styles.iconContainer, { backgroundColor: colors.info }]}>
            <Bell size={16} color="#FFFFFF" />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        notification.read ? styles.read : styles.unread,
      ]}
      onPress={() => onPress(notification)}
      activeOpacity={0.7}
    >
      {getIcon()}
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {notification.title}
        </Text>
        <Text style={styles.body} numberOfLines={2}>
          {notification.body}
        </Text>
        <Text style={styles.time}>{formatTime(notification.createdAt)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: layout.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  unread: {
    backgroundColor: "rgba(74, 122, 255, 0.05)",
  },
  read: {
    backgroundColor: colors.background,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: layout.spacing.md,
  },
  content: {
    flex: 1,
  },
  title: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.md,
    color: colors.text,
    marginBottom: 4,
  },
  body: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  time: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.xs,
    color: colors.textSecondary,
  },
});