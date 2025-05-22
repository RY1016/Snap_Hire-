import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { messages } from '../data/messages';
import { getPhotographerById } from '../data/photographers';
import ChatInterface from '../components/Chat/ChatInterface';
import { ChatMessage } from '../types';

const Chat: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const photographer = id ? getPhotographerById(id) : undefined;
  // Get initial messages or empty array if none exist
  const initialMessages = id ? messages[id] || [] : [];
  
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(initialMessages);
  
  // Handle sending a new message
  const handleSendMessage = (content: string) => {
    const newMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      senderId: 'user',
      content,
      timestamp: new Date(),
      isRead: false
    };
    
    setChatMessages([...chatMessages, newMessage]);
    
    // Simulate photographer response after a delay
    setTimeout(() => {
      const response: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        senderId: 'photographer',
        content: "Thanks for your message. I'll get back to you as soon as possible.",
        timestamp: new Date(),
        isRead: false
      };
      
      setChatMessages(prevMessages => [...prevMessages, response]);
    }, 1000);
  };
  
  if (!photographer) {
    return (
      <div className="py-12 text-center">
        <p>Photographer not found.</p>
        <button 
          onClick={() => navigate('/dashboard')}
          className="mt-4 btn btn-primary"
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <button 
          onClick={() => navigate(`/photographers/${photographer.id}`)}
          className="flex items-center gap-2 text-primary-500 mb-6"
        >
          <ArrowLeft size={18} />
          <span>Back to Profile</span>
        </button>
        
        <h1 className="text-2xl font-bold mb-6">
          Chat with {photographer.name}
        </h1>
        
        <div className="max-w-2xl">
          <ChatInterface
            messages={chatMessages}
            recipientName={photographer.name}
            recipientPhoto={photographer.profilePicture}
            onSendMessage={handleSendMessage}
          />
          
          <p className="text-center text-gray-500 text-sm mt-4">
            Response times may vary. Usually photographers respond within 24 hours.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Chat;