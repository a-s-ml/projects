import { MessageMyChat, MessageSystem } from '@components';
import { selectdataChatRoomData } from '@slice/chat-room';
import { useChatRoomSelector } from '@store/chat-room';
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
  const dataUser = useChatRoomSelector(selectdataChatRoomData);
  console.log(dataUser);

  const [state, setState] = useState<Event[]>([]);
  useEffect(() => {
    const socket = io('https://api80q.ru/chat', {
      auth: {
        token: accessToken,
      },
      transports: ['websocket', 'polling'],
    });

    const listener = (args: Event) => {
      setState((prevState) => [...prevState, args]);
    };

    socket.on('chat_updated', listener);
    socket.on('exception', listener);
    socket.on('message', listener);
  }, [accessToken]);
  console.log('state ', state);

  return (
    <ChatPanel>
      {state &&
        state.map((message) =>
          message.text ? (
            dataUser && message.chat !== dataUser.UserData.user.id ? (
              <MessageChat
                key={message.id}
                name={String(message.user)}
                text={message.text}
              />
            ) : (
              <MessageMyChat key={message.id} text={message.text} />
            )
          ) : (
            <MessageSystem
              name={String(message.user)}
              action={'присоединился'}
              chat={String(message.chat)}
            />
          )
        )}
    </ChatPanel>
  );
};

export default ChatRoom;

//export const getTokenPayload = (accessToken: string): TokenPayload =>
//  JSON.parse(window.atob(accessToken.split('.')[1]));
