import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { Plus, Users, MessageSquare } from "lucide-react-native";
import { colors } from "@/constants/colors";
import { typography } from "@/constants/typography";
import { layout } from "@/constants/layout";
import { ChatRoomItem } from "@/components/ChatRoomItem";
import { useChatStore } from "@/store/chat-store";
import { ChatRoom } from "@/types";

export default function CommunityScreen() {
  const router = useRouter();
  const { chatRooms, isLoading, error, fetchChatRooms, setCurrentRoom } = useChatStore();

  useEffect(() => {
    fetchChatRooms();
  }, [fetchChatRooms]);

  const handleChatRoomPress = (chatRoom: ChatRoom) => {
    setCurrentRoom(chatRoom.id);
    router.push(`/chat/${chatRoom.id}`);
  };

  const renderChatRoom = ({ item }: { item: ChatRoom }) => (
    <ChatRoomItem chatRoom={item} onPress={handleChatRoomPress} />
  );

  const groupChats = chatRooms.filter((room) => room.type === "group");
  const directChats = chatRooms.filter((room) => room.type === "direct");

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={fetchChatRooms}>
          <Text style={styles.retryText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={[...groupChats, ...directChats]}
        renderItem={renderChatRoom}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <Text style={styles.title}>Community</Text>
              <TouchableOpacity style={styles.newChatButton}>
                <Plus size={20} color="#FFFFFF" />
              </TouchableOpacity>
            </View>

            <View style={styles.tabsContainer}>
              <TouchableOpacity style={[styles.tab, styles.activeTab]}>
                <Text style={[styles.tabText, styles.activeTabText]}>All</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tab}>
                <Users size={16} color={colors.textSecondary} />
                <Text style={styles.tabText}>Groups</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tab}>
                <MessageSquare size={16} color={colors.textSecondary} />
                <Text style={styles.tabText}>Direct</Text>
              </TouchableOpacity>
            </View>

            {groupChats.length > 0 && (
              <Text style={styles.sectionTitle}>Group Conversations</Text>
            )}
          </>
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>No conversations yet</Text>
            <Text style={styles.emptyDescription}>
              Start chatting with other students or join group conversations
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: layout.spacing.lg,
    paddingBottom: layout.spacing.md,
  },
  title: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.xl,
    color: colors.text,
  },
  newChatButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  tabsContainer: {
    flexDirection: "row",
    paddingHorizontal: layout.spacing.lg,
    paddingBottom: layout.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  tab: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: layout.spacing.sm,
    paddingHorizontal: layout.spacing.md,
    marginRight: layout.spacing.md,
    borderRadius: layout.borderRadius.full,
  },
  activeTab: {
    backgroundColor: colors.primary,
  },
  tabText: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    marginLeft: 4,
  },
  activeTabText: {
    color: "#FFFFFF",
  },
  sectionTitle: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.md,
    color: colors.text,
    padding: layout.spacing.lg,
    paddingBottom: layout.spacing.sm,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: layout.spacing.xl,
  },
  errorText: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.md,
    color: colors.error,
    textAlign: "center",
    marginBottom: layout.spacing.lg,
  },
  retryButton: {
    paddingVertical: layout.spacing.sm,
    paddingHorizontal: layout.spacing.lg,
    backgroundColor: colors.primary,
    borderRadius: layout.borderRadius.md,
  },
  retryText: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.md,
    color: "#FFFFFF",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: layout.spacing.xl,
    marginTop: layout.spacing.xxl,
  },
  emptyTitle: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.lg,
    color: colors.text,
    marginBottom: layout.spacing.sm,
  },
  emptyDescription: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
    textAlign: "center",
  },
});