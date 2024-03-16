import ChatPanel from 'libs/components/src/lib/ChatPanel';
import { useEffect } from 'react';
import { Socket, io } from 'socket.io-client';

export interface ChatRoomProps {
  accessToken: string;
}

export const ChatRoom = ({ accessToken }: ChatRoomProps) => {
  useEffect(() => {
    const socket = io('https://api80q.ru/chat', {
      auth: {
        token: accessToken,
      },
      transports: ['websocket', 'polling'],
    });
    socket.on('chat_updated', ({ data }) => {
      console.log(data);
    });
    socket.on('exception', ({ data }) => {
      console.log(data);
    });
  }, [accessToken]);

  return (
    <p>
      <ChatPanel>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
      </ChatPanel>
    </p>
  );
};

export default ChatRoom;
