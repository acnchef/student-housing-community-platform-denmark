import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { ChatRoom } from "@/types";
import { colors } from "@/constants/colors";
import { typography } from "@/constants/typography";
import { layout } from "@/constants/layout";
import { Avatar } from "./ui/Avatar";
import { Badge } from "./ui/Badge";

interface ChatRoomItemProps {
  chatRoom: ChatRoom;
  onPress: (chatRoom: ChatRoom) => void;
}

export const ChatRoomItem: React.FC<ChatRoomItemProps> = ({
  chatRoom,
  onPress,
}) => {
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (diffInDays === 0) {
      // Today, show time
      return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    } else if (diffInDays === 1) {
      // Yesterday
      return "Yesterday";
    } else if (diffInDays < 7) {
      // This week, show day name
      return date.toLocaleDateString([], { weekday: "short" });
    } else {
      // Older, show date
      return date.toLocaleDateString([], {
        month: "short",
        day: "numeric",
      });
    }
  };

  const getAvatarSource = () => {
    if (chatRoom.type === "direct") {
      // For direct messages, show the other person's avatar
      const otherParticipant = chatRoom.participants.find(
        (p) => p.id !== "1" // Assuming current user id is "1"
      );
      return otherParticipant?.avatar;
    }
    // For group chats, show the group avatar
    return chatRoom.avatar;
  };

  const getName = () => {
    if (chatRoom.type === "direct") {
      // For direct messages, show the other person's name
      const otherParticipant = chatRoom.participants.find(
        (p) => p.id !== "1" // Assuming current user id is "1"
      );
      return otherParticipant?.name || "Unknown";
    }
    // For group chats, show the group name
    return chatRoom.name;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(chatRoom)}
      activeOpacity={0.7}
    >
      <View style={styles.avatarContainer}>
        <Avatar
          source={getAvatarSource()}
          name={getName()}
          size="lg"
          showBadge={chatRoom.type === "direct"}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name} numberOfLines={1}>
            {getName()}
          </Text>
          <Text style={styles.time}>
            {chatRoom.lastMessage ? formatTime(chatRoom.lastMessage.createdAt) : ""}
          </Text>
        </View>
        {chatRoom.lastMessage && (
          <View style={styles.messageRow}>
            <Text style={styles.message} numberOfLines={1}>
              {chatRoom.type === "group" && `${chatRoom.lastMessage.senderName}: `}
              {chatRoom.lastMessage.content}
            </Text>
            {chatRoom.unreadCount > 0 && (
              <Badge
                text={chatRoom.unreadCount.toString()}
                variant="primary"
                size="sm"
                style={styles.badge}
              />
            )}
          </View>
        )}
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
  avatarContainer: {
    marginRight: layout.spacing.md,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  name: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.md,
    color: colors.text,
    flex: 1,
    marginRight: layout.spacing.sm,
  },
  time: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.xs,
    color: colors.textSecondary,
  },
  messageRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  message: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    flex: 1,
    marginRight: layout.spacing.sm,
  },
  badge: {
    minWidth: 20,
    height: 20,
  },
});