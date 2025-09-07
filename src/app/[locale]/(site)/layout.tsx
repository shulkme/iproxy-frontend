import { ChatbotProvider } from '@/providers/chatbot';
import React from 'react';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <ChatbotProvider>
      <main>{children}</main>
    </ChatbotProvider>
  );
}
