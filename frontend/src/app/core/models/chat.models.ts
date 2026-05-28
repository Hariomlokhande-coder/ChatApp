export interface MessageResponse {
  messageId: string;
  deliveryStatus: number;
  requestId: string;
  senderId: string;
  senderName: string;
  receiverId?: string;
  receiverName?: string;
  groupId?: string;
  groupName?: string;
  content: string;
  messageType: string;
  isEdited: boolean;
  createdAt: string;
  updatedAt?: string;
  reactions?: string[];
}

export interface GroupResponse {
  groupId: string;
  name: string;
  description?: string;
  memberCount: number;
  onlineCount: number;
  createdAt: string;
  createdBy: string;
  creatorName: string;
}

export interface PaginatedResult<T> {
  items: T[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface TypingNotification {
  userId: string;
  username: string;
  UserId?: string;   // Added for backend casing
  Username?: string; // Added for backend casing
  isTyping: boolean;
  groupId?: string;
  GroupId?: string;
  stopped?: boolean;
}
