import ChatPanel from 'libs/components/src/lib/ChatPanel';
import { useEffect, useState } from 'react';
import { Socket, io } from 'socket.io-client';

export interface ChatRoomProps {
  accessToken: string | undefined;
}

export const ChatRoom = ({ accessToken }: ChatRoomProps) => {
  console.log('accessToken', accessToken);
  const [state, setState] = useState([]);
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
    socket.on('message', ({ data }) => {
      setState(data);
    });
  }, [accessToken]);

  return (
    <p>
      <ChatPanel>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        {state.map((message) => (
          <p>{message}</p>
        ))}
      </ChatPanel>
    </p>
  );
};

export default ChatRoom;
