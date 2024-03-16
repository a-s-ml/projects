import ChatPanel from 'libs/components/src/lib/ChatPanel';
import MessageChat from 'libs/components/src/lib/MessageChat';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export interface ChatRoomProps {
  accessToken: string | undefined;
}

type Event = {
  id: number;
  user: number;
  chat: number;
  text: string;
};

export const ChatRoom = ({ accessToken }: ChatRoomProps) => {
  console.log('accessToken', accessToken);
  const initial: Event[] = [
    {
      id: 0,
      user: 0,
      chat: 0,
      text: '',
    },
  ];
  const [state, setState] = useState<Event[]>(initial);
  useEffect(() => {
    const socket = io('https://api80q.ru/chat', {
      auth: {
        token: accessToken,
      },
      transports: ['websocket', 'polling'],
    });
    const listener = (...args: any[]) => {
      setState((prevState) => ({
        ...prevState,
        args,
      }));
      console.log('args ', args);
    };

    socket.on('chat_updated', listener);
    socket.on('exception', listener);
    socket.on('message', listener);
  }, [accessToken]);
  console.log('state ', state);

  return (
    <p>
      <ChatPanel>
        {state &&
          state.map((message) => (
            <>
              <MessageChat
                key={message.id}
                name={String(message.user)}
                text={message.text}
                time={String(message.chat)}
              />
            </>
          ))}
          <b>1</b>
      </ChatPanel>
    </p>
  );
};

export default ChatRoom;
