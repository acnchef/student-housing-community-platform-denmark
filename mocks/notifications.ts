import { Notification } from "@/types";

export const notifications: Notification[] = [
  {
    id: "1",
    title: "New Message",
    body: "Tao Chen: I can show you the apartment tomorrow at 3 PM if that works for you?",
    type: "message",
    read: false,
    data: {
      roomId: "4",
      messageId: "404",
    },
    createdAt: "2023-06-15T09:10:00Z",
  },
  {
    id: "2",
    title: "Deposit Payment Confirmed",
    body: "Your deposit payment for 'Modern Studio in Nørrebro' has been confirmed and is now in escrow.",
    type: "payment",
    read: true,
    data: {
      propertyId: "1",
      paymentId: "p1",
    },
    createdAt: "2023-06-14T14:30:00Z",
  },
  {
    id: "3",
    title: "New Property Match",
    body: "We found a new property that matches your search criteria: 'Cozy Room in Shared Apartment'",
    type: "property",
    read: true,
    data: {
      propertyId: "3",
    },
    createdAt: "2023-06-13T10:15:00Z",
  },
  {
    id: "4",
    title: "Identity Verification Successful",
    body: "Your identity has been successfully verified. You can now access all features of the platform.",
    type: "system",
    read: true,
    data: {},
    createdAt: "2023-06-12T16:45:00Z",
  },
  {
    id: "5",
    title: "New Group Message",
    body: "Lukas Schmidt: Anyone interested in joining a picnic at Frederiksberg Gardens this Saturday?",
    type: "message",
    read: true,
    data: {
      roomId: "3",
      messageId: "301",
    },
    createdAt: "2023-06-13T18:20:00Z",
  },
];