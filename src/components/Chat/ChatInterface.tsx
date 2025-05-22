import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { ChatMessage } from '../../types';

interface ChatInterfaceProps {
  messages: ChatMessage[];
  recipientName: string;
  recipientPhoto: string;
  onSendMessage: (content: string) => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ 
  messages, 
  recipientName, 
  recipientPhoto,
  onSendMessage 
}) => {
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of messages when they change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-card overflow-hidden"
    >
      {/* Chat header */}
      <div className="flex items-center gap-3 p-4 border-b border-gray-200">
        <img
          src={recipientPhoto}
          alt={recipientName}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="font-medium">{recipientName}</div>
      </div>
      
      {/* Messages area */}
      <div className="h-[350px] overflow-y-auto p-4 bg-gray-50">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 max-w-[80%] ${
              message.senderId === 'user' ? 'ml-auto' : 'mr-auto'
            }`}
          >
            <div
              className={`p-3 rounded-2xl ${
                message.senderId === 'user'
                  ? 'bg-primary-500 text-white rounded-tr-none'
                  : 'bg-gray-200 text-gray-800 rounded-tl-none'
              }`}
            >
              {message.content}
            </div>
            <div
              className={`text-xs mt-1 text-gray-500 ${
                message.senderId === 'user' ? 'text-right' : 'text-left'
              }`}
            >
              {message.timestamp.toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Message input */}
      <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 flex gap-2">
        <input
          type="text"
          className="input flex-grow"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary px-3"
          disabled={!newMessage.trim()}
        >
          <Send size={18} />
        </button>
      </form>
    </motion.div>
  );
};

export default ChatInterface;