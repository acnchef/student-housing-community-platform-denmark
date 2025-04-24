import React, { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams, useRouter, Stack } from "expo-router";
import { Send, ChevronLeft, MoreVertical } from "lucide-react-native";
import { colors } from "@/constants/colors";
import { typography } from "@/constants/typography";
import { layout } from "@/constants/layout";
import { Avatar } from "@/components/ui/Avatar";
import { useChatStore } from "@/store/chat-store";
import { Message } from "@/types";

export default function ChatScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const {
    chatRooms,
    messages,
    isLoading,
    isSending,
    error,
    fetchMessages,
    sendMessage,
  } = useChatStore();
  const [messageText, setMessageText] = useState("");
  const flatListRef = useRef<FlatList>(null);

  const chatRoom = chatRooms.find((room) => room.id === id);
  const roomMessages = messages[id as string] || [];

  useEffect(() => {
    if (id) {
      fetchMessages(id as string);
    }
  }, [id, fetchMessages]);

  useEffect(() => {
    // Scroll to bottom when new messages arrive
    if (roomMessages.length > 0 && flatListRef.current) {
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  }, [roomMessages]);

  const handleSend = async () => {
    if (messageText.trim() && id) {
      await sendMessage(id as string, messageText.trim());
      setMessageText("");
    }
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const renderMessage = ({ item, index }: { item: Message; index: number }) => {
    const isCurrentUser = item.senderId === "1"; // Assuming current user id is "1"
    const showAvatar =
      index === 0 ||
      roomMessages[index - 1].senderId !== item.senderId ||
      new Date(item.createdAt).getTime() -
        new Date(roomMessages[index - 1].createdAt).getTime() >
        5 * 60 * 1000; // 5 minutes

    return (
      <View
        style={[
          styles.messageContainer,
          isCurrentUser ? styles.currentUserMessage : styles.otherUserMessage,
        ]}
      >
        {!isCurrentUser && showAvatar && (
          <Avatar
            source={item.senderAvatar}
            name={item.senderName}
            size="sm"
            style={styles.messageAvatar}
          />
        )}
        {!isCurrentUser && !showAvatar && <View style={styles.avatarPlaceholder} />}
        <View
          style={[
            styles.messageBubble,
            isCurrentUser ? styles.currentUserBubble : styles.otherUserBubble,
          ]}
        >
          {!isCurrentUser && chatRoom?.type === "group" && showAvatar && (
            <Text style={styles.messageSender}>{item.senderName}</Text>
          )}
          <Text style={styles.messageText}>{item.content}</Text>
          <Text style={styles.messageTime}>{formatTime(item.createdAt)}</Text>
        </View>
      </View>
    );
  };

  if (!chatRoom) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  const getTitle = () => {
    if (chatRoom.type === "direct") {
      // For direct messages, show the other person's name
      const otherParticipant = chatRoom.participants.find(
        (p) => p.id !== "1" // Assuming current user id is "1"
      );
      return otherParticipant?.name || "Chat";
    }
    // For group chats, show the group name
    return chatRoom.name;
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <View style={styles.headerTitle}>
              <Avatar
                source={
                  chatRoom.type === "direct"
                    ? chatRoom.participants.find((p) => p.id !== "1")?.avatar
                    : chatRoom.avatar
                }
                name={getTitle()}
                size="sm"
                showBadge={chatRoom.type === "direct"}
                style={styles.headerAvatar}
              />
              <View>
                <Text style={styles.headerName}>{getTitle()}</Text>
                {chatRoom.type === "group" && (
                  <Text style={styles.headerSubtitle}>
                    {chatRoom.participants.length} members
                  </Text>
                )}
              </View>
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={styles.headerButton}
              onPress={() => router.back()}
            >
              <ChevronLeft size={24} color={colors.text} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={styles.headerButton}>
              <MoreVertical size={24} color={colors.text} />
            </TouchableOpacity>
          ),
        }}
      />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      >
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
        ) : (
          <FlatList
            ref={flatListRef}
            data={roomMessages}
            renderItem={renderMessage}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.messagesList}
            showsVerticalScrollIndicator={false}
            inverted={false}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyTitle}>No messages yet</Text>
                <Text style={styles.emptyDescription}>
                  Start the conversation by sending a message
                </Text>
              </View>
            }
          />
        )}

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            placeholderTextColor={colors.textSecondary}
            value={messageText}
            onChangeText={setMessageText}
            multiline
          />
          <TouchableOpacity
            style={[
              styles.sendButton,
              (!messageText.trim() || isSending) && styles.sendButtonDisabled,
            ]}
            onPress={handleSend}
            disabled={!messageText.trim() || isSending}
          >
            {isSending ? (
              <ActivityIndicator size="small" color="#FFFFFF" />
            ) : (
              <Send size={20} color="#FFFFFF" />
            )}
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerAvatar: {
    marginRight: layout.spacing.sm,
  },
  headerName: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.md,
    color: colors.text,
  },
  headerSubtitle: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.xs,
    color: colors.textSecondary,
  },
  headerButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  messagesList: {
    padding: layout.spacing.md,
    paddingBottom: layout.spacing.xl,
  },
  messageContainer: {
    flexDirection: "row",
    marginBottom: layout.spacing.sm,
    maxWidth: "80%",
  },
  currentUserMessage: {
    alignSelf: "flex-end",
  },
  otherUserMessage: {
    alignSelf: "flex-start",
  },
  messageAvatar: {
    marginRight: 8,
    alignSelf: "flex-end",
    marginBottom: 4,
  },
  avatarPlaceholder: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  messageBubble: {
    padding: layout.spacing.sm,
    borderRadius: layout.borderRadius.md,
    maxWidth: "100%",
  },
  currentUserBubble: {
    backgroundColor: colors.primary,
    borderBottomRightRadius: 0,
  },
  otherUserBubble: {
    backgroundColor: colors.card,
    borderBottomLeftRadius: 0,
  },
  messageSender: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.xs,
    color: colors.primary,
    marginBottom: 2,
  },
  messageText: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.md,
    color: colors.text,
  },
  messageTime: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.xs,
    color: colors.textSecondary,
    alignSelf: "flex-end",
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: "row",
    padding: layout.spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.background,
  },
  input: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: layout.borderRadius.md,
    paddingHorizontal: layout.spacing.md,
    paddingVertical: layout.spacing.sm,
    maxHeight: 100,
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.md,
    color: colors.text,
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: layout.spacing.sm,
  },
  sendButtonDisabled: {
    backgroundColor: colors.textSecondary,
    opacity: 0.5,
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