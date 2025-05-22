import { ChatMessage } from '../types';

// Sample chat messages
export const messages: Record<string, ChatMessage[]> = {
  '1': [
    {
      id: '1',
      senderId: 'photographer',
      content: 'Hi! Thanks for reaching out. How can I help?',
      timestamp: new Date('2025-04-13T14:30:00'),
      isRead: true
    },
    {
      id: '2',
      senderId: 'user',
      content: 'Hello Jane, I\'m interested in your wedding package for next October. Are you available?',
      timestamp: new Date('2025-04-13T14:32:00'),
      isRead: true
    },
    {
      id: '3',
      senderId: 'photographer',
      content: 'I might be! Can you tell me the exact date?',
      timestamp: new Date('2025-04-13T14:33:00'),
      isRead: true
    }
  ]
};