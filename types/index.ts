export type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  isVerified: boolean;
  role: "student" | "landlord" | "admin";
  createdAt: string;
};

export type Property = {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  deposit: number;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  size: number;
  rooms: number;
  furnished: boolean;
  availableFrom: string;
  availableTo?: string;
  images: string[];
  amenities: string[];
  landlordId: string;
  landlordName: string;
  landlordAvatar?: string;
  landlordRating?: number;
  createdAt: string;
  updatedAt: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  distance?: number;
  isFavorite?: boolean;
};

export type ChatRoom = {
  id: string;
  name: string;
  description?: string;
  type: "group" | "direct";
  participants: User[];
  lastMessage?: Message;
  unreadCount: number;
  createdAt: string;
  updatedAt: string;
  avatar?: string;
};

export type Message = {
  id: string;
  roomId: string;
  senderId: string;
  senderName: string;
  senderAvatar?: string;
  content: string;
  createdAt: string;
  status: "sent" | "delivered" | "read";
};

export type ResourceCategory = {
  id: string;
  name: string;
  icon: string;
  description?: string;
};

export type Resource = {
  id: string;
  title: string;
  description: string;
  content: string;
  categoryId: string;
  categoryName: string;
  thumbnail?: string;
  createdAt: string;
  updatedAt: string;
};

export type Notification = {
  id: string;
  title: string;
  body: string;
  type: "message" | "property" | "payment" | "system";
  read: boolean;
  data?: any;
  createdAt: string;
};

export type PaymentStatus = 
  | "pending"
  | "processing"
  | "completed"
  | "failed"
  | "refunded"
  | "cancelled";

export type Payment = {
  id: string;
  propertyId: string;
  propertyTitle: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  paymentMethod: string;
  createdAt: string;
  updatedAt: string;
};