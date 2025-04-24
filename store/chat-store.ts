import { create } from "zustand";
import { ChatRoom, Message } from "@/types";
import { chatRooms as mockChatRooms } from "@/mocks/chatRooms";
import { messages as mockMessages } from "@/mocks/messages";

interface ChatState {
  chatRooms: ChatRoom[];
  currentRoomId: string | null;
  messages: Record<string, Message[]>;
  isLoading: boolean;
  isSending: boolean;
  error: string | null;
  fetchChatRooms: () => Promise<void>;
  fetchMessages: (roomId: string) => Promise<void>;
  sendMessage: (roomId: string, content: string) => Promise<void>;
  setCurrentRoom: (roomId: string | null) => void;
  markAsRead: (roomId: string) => void;
}

export const useChatStore = create<ChatState>((set, get) => ({
  chatRooms: [],
  currentRoomId: null,
  messages: {},
  isLoading: false,
  isSending: false,
  error: null,

  fetchChatRooms: async () => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      set({
        chatRooms: mockChatRooms,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "An error occurred",
        isLoading: false,
      });
    }
  },

  fetchMessages: async (roomId: string) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const roomMessages = mockMessages[roomId] || [];

      set((state) => ({
        messages: {
          ...state.messages,
          [roomId]: roomMessages,
        },
        isLoading: false,
      }));
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "An error occurred",
        isLoading: false,
      });
    }
  },

  sendMessage: async (roomId: string, content: string) => {
    set({ isSending: true, error: null });
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      const newMessage: Message = {
        id: `new-${Date.now()}`,
        roomId,
        senderId: "1", // Current user ID
        senderName: "Ana Rodriguez", // Current user name
        senderAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        content,
        createdAt: new Date().toISOString(),
        status: "sent",
      };

      set((state) => {
        // Update messages
        const roomMessages = state.messages[roomId] || [];
        const updatedMessages = {
          ...state.messages,
          [roomId]: [...roomMessages, newMessage],
        };

        // Update chat rooms with new last message
        const updatedChatRooms = state.chatRooms.map((room) => {
          if (room.id === roomId) {
            return {
              ...room,
              lastMessage: newMessage,
              updatedAt: newMessage.createdAt,
            };
          }
          return room;
        });

        // Sort chat rooms by updatedAt
        updatedChatRooms.sort((a, b) => {
          return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
        });

        return {
          messages: updatedMessages,
          chatRooms: updatedChatRooms,
          isSending: false,
        };
      });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "An error occurred",
        isSending: false,
      });
    }
  },

  setCurrentRoom: (roomId: string | null) => {
    set({ currentRoomId: roomId });
    if (roomId) {
      get().markAsRead(roomId);
    }
  },

  markAsRead: (roomId: string) => {
    set((state) => {
      const updatedChatRooms = state.chatRooms.map((room) => {
        if (room.id === roomId) {
          return {
            ...room,
            unreadCount: 0,
          };
        }
        return room;
      });

      return {
        chatRooms: updatedChatRooms,
      };
    });
  },
}));